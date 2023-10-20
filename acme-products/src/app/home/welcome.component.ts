import { Component } from '@angular/core';

@Component({
  selector: 'sv-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public pageTitle = 'Welcome';

  constructor() { }

}
