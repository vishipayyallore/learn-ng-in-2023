import { Component } from '@angular/core';

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Angular';

  constructor() {
    console.log(`constructor() - title is: ${this.title}`);
    // this.changeTitle(this.setTitle); // Callback hell

    this.onComplete().then(this.setTitle);
  }

  private setTitle = () => {
    this.title = 'Learning Angular Async App';
    console.log(`setTitle() - title is: ${this.title}`);
  }

  private changeTitle(callback: Function) {
    console.log(`changeTitle() - title is: ${this.title}`);
    setTimeout(() => {
      callback();
    }, 2000);
  }

  private onComplete() {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }


}
