import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'sv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Learning Angular';

  title$ = new Observable(observer => {
    setInterval(() => {
      observer.next();
    }, 2000);
  });

  constructor() {
    console.log(`constructor() - title is: ${this.title}`);

    // Callback hell
    // this.changeTitle(this.setTitle); 

    // Promise Version
    // this.onComplete().then(this.setTitle);

    // Observable Version
    this.title$.subscribe(this.setTitle);
  }

  private setTitle = () => {
    this.title = `Learning Angular Async App (${new Date().getMilliseconds()})`;

    console.log(`setTitle() - title is: ${this.title}`);
  }

  // Version 1
  // private onComplete() {
  //   return new Promise<void>(resolve => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 2000);
  //   });
  // }

  // Version 2
  // private onComplete() {
  //   return new Promise<void>(resolve => {
  //     setInterval(() => {
  //       resolve();
  //     }, 2000);
  //   });
  // }

  // Callback hell
  // private changeTitle(callback: Function) {
  //   console.log(`changeTitle() - title is: ${this.title}`);
  //   setTimeout(() => {
  //     callback();
  //   }, 2000);
  // }



}
