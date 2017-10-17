import { enableProdMode, Injector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';
import { UrlService } from "@uirouter/angular/lib";

declare const angular: any;

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
//   const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
//   upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
// }).catch(console.error);

angular.element(document).ready(function () {
  // Manually bootstrap the Angular app
  platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    const injector: Injector = platformRef.injector;
    const upgrade = injector.get(UpgradeModule) as UpgradeModule;

    // Manually bootstrap the AngularJS app
    upgrade.bootstrap(document.body, ['myApp']);

    // Intialize the Angular Module (get() any UIRouter service from DI to initialize it)
    const url: UrlService = injector.get(UrlService);

    // Instruct UIRouter to listen to URL changes
    url.listen();
    url.sync();
  });
});
