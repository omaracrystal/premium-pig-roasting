import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallBlockComponent } from './call-block.component';

describe('CallBlockComponent', () => {
  let component: CallBlockComponent;
  let fixture: ComponentFixture<CallBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
