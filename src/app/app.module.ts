import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UpgradeModule } from '@angular/upgrade/static';
import { RouterModule, Routes, UrlHandlingStrategy } from '@angular/router';

import { HybridAppComponent } from './hybrid-app.component';
import { AppComponent } from './app.component';
import { DowngradeModule } from './hybrid/downgrade.module';
import { FooterComponent } from './footer/footer.component';
import { DowngradedComponent } from './downgrade-example/downgraded.component';
import { ServiceOne } from './angular-js/service1/service1.upgrade';

const routes: Routes = [
  { path: 'downgraded', component: DowngradedComponent }
];

export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
  shouldProcessUrl(url) {
    return !!routes.find(route => url.toString().startsWith('/' + route.path));
  }

  extract(url) { return url; }

  merge(url, whole) { return url; }
}

@NgModule({
  declarations: [
    HybridAppComponent,
    AppComponent,
    FooterComponent,
    DowngradedComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    UpgradeModule,
    DowngradeModule
  ],
  providers: [
    { provide: UrlHandlingStrategy, useClass: Ng1Ng2UrlHandlingStrategy },
    ServiceOne
  ],
  entryComponents: [
    AppComponent,
    FooterComponent,
    DowngradedComponent
  ],
  bootstrap: [HybridAppComponent]
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
