import { Component } from '@angular/core';
import { Downgrade } from '../hybrid/downgrade.decorator';

@Downgrade()
@Component({
  selector: 'app-downgraded',
  templateUrl: './downgraded.component.html',
  styleUrls: ['./downgraded.component.css']
})
export class DowngradedComponent {

  constructor() { }
}
