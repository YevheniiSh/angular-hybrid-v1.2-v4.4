import { Component, VERSION } from '@angular/core';
import { Downgrade } from './hybrid/downgrade.decorator';

@Downgrade()
@Component({
  selector: 'app-root',
  template: `<span>{{version}}</span>`
})
export class AppComponent {

  version = VERSION.full;
}
