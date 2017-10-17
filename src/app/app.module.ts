import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { UIRouterUpgradeModule } from '@uirouter/angular-hybrid';
import { UIRouterModule, UrlService } from '@uirouter/angular/lib';

import { HybridAppComponent } from './hybrid-app.component';
import { AppComponent } from './app.component';
import { DowngradeModule } from './hybrid/downgrade.module';
import { FooterComponent } from './footer/footer.component';
import { DowngradedComponent } from './downgrade-example/downgraded.component';
import { ServiceOne } from './angular-js/service1/service1.upgrade';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HybridAppComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    DowngradedComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule,
    DowngradeModule,
    UIRouterUpgradeModule,
    UIRouterModule.forChild()
  ],
  providers: [
    ServiceOne
  ],
  entryComponents: [
    AppComponent,
    FooterComponent,
    DowngradedComponent
  ],
  bootstrap: []
})
export class AppModule {

  constructor(private dp: DowngradeModule) {
    this.dp.init(AppModule, {
      defaultAngularJsModuleForComponents: 'myApp',
      defaultAngularJsModuleForProviders: 'myApp',
      componentPrefix: 'app'
    });
  }

  ngDoBootstrap() {
  }
}

angular.module('myApp').config(['$urlServiceProvider', ($urlService: UrlService) => $urlService.deferIntercept()]);
