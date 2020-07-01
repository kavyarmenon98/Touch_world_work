import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomFieldComponent } from './random-field.component';

describe('RandomFieldComponent', () => {
  let component: RandomFieldComponent;
  let fixture: ComponentFixture<RandomFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
