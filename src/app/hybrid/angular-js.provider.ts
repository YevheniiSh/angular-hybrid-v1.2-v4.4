import { ModuleWithProviders, NgModule } from '@angular/core';

const $routeParamsToken = '$routeParams';
const $locationToken = '$location';

export function routeParamsInjector(i: any) {
  return i.get($routeParamsToken);
}

export function locationInjector(i: any) {
  return i.get($locationToken);
}

@NgModule()
export class AngularJsProvider {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AngularJsProvider,
      providers: [
        { provide: $routeParamsToken, useFactory: routeParamsInjector, deps: ['$injector'] },
        { provide: $locationToken, useFactory: locationInjector, deps: ['$injector'] },
      ]
    };
  }
}
