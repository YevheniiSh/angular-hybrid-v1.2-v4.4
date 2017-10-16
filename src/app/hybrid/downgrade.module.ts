import { NgModule, Type } from '@angular/core';
import { HybridHelper } from './hybrid.helper';
import { DowngradeDecorator } from './downgrade.decorator';
import { DowngradeModuleConfig } from './downgrade.module.config';

declare let Reflect: any;

interface DownedEntity {
  downgradeDecorator: DowngradeDecorator;
  originalEntity: Type<any>;
}

@NgModule({
  imports: [HybridHelper]
})
export class DowngradeModule {
  constructor(private hybridHelper: HybridHelper) {
  }

  init(module: Type<any>, config: DowngradeModuleConfig): void {
    this.hybridHelper.componentPrefix = config.componentPrefix;

    for (const classDecorator of Reflect.getMetadata('annotations', module)) {
      if (classDecorator.providers) {
        this.downgrade(
          this.getDownedEntities(classDecorator.providers),
          config.defaultAngularJsModuleForProviders,
          this.hybridHelper.downgradeProvider.bind(this.hybridHelper)
        );
      }

      if (classDecorator.entryComponents) {
        this.downgrade(
          this.getDownedEntities(classDecorator.declarations),
          config.defaultAngularJsModuleForComponents,
          this.hybridHelper.downgradeComponent.bind(this.hybridHelper)
        );
      }
    }
  }

  private downgrade(downedEntities: DownedEntity[], moduleName: string, downgradeFn: Function) {
    downedEntities.forEach(downedEntity => {
      downgradeFn(downedEntity.downgradeDecorator.module || moduleName, downedEntity.originalEntity);
    });
  }

  private getDownedEntities(entities): DownedEntity[] {
    const res: DownedEntity[] = [];
    for (const entity of entities) {
      const entityDecorators = Reflect.getMetadata('annotations', entity);
      if (entityDecorators) {
        for (const decorator of entityDecorators) {
          if (decorator.constructor.name === DowngradeDecorator.name) {
            res.push({ downgradeDecorator: decorator, originalEntity: entity });
          }
        }
      }
    }
    return res;
  }
}
