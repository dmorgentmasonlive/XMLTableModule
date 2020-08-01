import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XmltableComponent } from './xmltable.component';

describe('XmltableComponent', () => {
  let component: XmltableComponent;
  let fixture: ComponentFixture<XmltableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XmltableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XmltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
