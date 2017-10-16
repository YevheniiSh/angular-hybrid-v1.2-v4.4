import { Component } from '@angular/core';

@Component({
  selector: 'app-hybrid',
  template: `
    <app-header></app-header>
    <div ng-view></div>
    <app-footer></app-footer>
  `
})
export class HybridAppComponent {
}
