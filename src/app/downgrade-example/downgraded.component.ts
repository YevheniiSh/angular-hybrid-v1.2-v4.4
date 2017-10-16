import { Component, Inject } from '@angular/core';
import { Downgrade } from '../hybrid/downgrade.decorator';

@Downgrade()
@Component({
  selector: 'app-downgraded',
  templateUrl: './downgraded.component.html',
  styleUrls: ['./downgraded.component.css']
})
export class DowngradedComponent {

  constructor(@Inject('service1') service1) {
    console.log(service1);
  }
}
