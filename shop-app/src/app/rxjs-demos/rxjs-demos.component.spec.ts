import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsDemosComponent } from './rxjs-demos.component';

describe('RxjsDemosComponent', () => {
  let component: RxjsDemosComponent;
  let fixture: ComponentFixture<RxjsDemosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsDemosComponent]
    });
    fixture = TestBed.createComponent(RxjsDemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
