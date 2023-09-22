import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'sv-key-logger',
  templateUrl: './key-logger.component.html',
  styleUrls: ['./key-logger.component.scss']
})
export class KeyLoggerComponent implements OnInit {
  @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;
  keys = '';

  constructor() { }

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup');
    logger$.subscribe(evt => this.keys += evt.key);
  }

}
