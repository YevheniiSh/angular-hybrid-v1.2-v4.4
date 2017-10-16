import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { UpgradeModule } from '@angular/upgrade/static';

import { AppModule } from './app/app.module';

declare const angular: any;

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  const upgrade = ref.injector.get(UpgradeModule) as UpgradeModule;
  upgrade.bootstrap(document.body, ['myApp'], { strictDi: true });
}).catch(console.error);
