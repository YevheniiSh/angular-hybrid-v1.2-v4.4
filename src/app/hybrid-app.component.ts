import { Component } from '@angular/core';

@Component({
  selector: 'app-hybrid',
  template: `
    <router-outlet></router-outlet>
    <div ng-view></div>
    <app-footer></app-footer>
  `
})
export class HybridAppComponent {
}
