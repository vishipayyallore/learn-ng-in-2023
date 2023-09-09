import { Component } from '@angular/core';

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Angular Async App';

  constructor() {
    this.changeTitle(this.setTitle);
  }

  private setTitle = () => {
    this.title = 'Learning Angular Async App';
  }

  private changeTitle(callback: Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

}
