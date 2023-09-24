import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';

@Component({
  selector: 'sv-rxjs-demos',
  templateUrl: './rxjs-demos.component.html',
  styleUrls: ['./rxjs-demos.component.scss']
})
export class RxjsDemosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const values = of(1, 2, 3);
    values.subscribe(value => console.log(value));

    const values1 = from([4, 5, 6]);
    values1.subscribe(value => console.log(value));
  }


}
