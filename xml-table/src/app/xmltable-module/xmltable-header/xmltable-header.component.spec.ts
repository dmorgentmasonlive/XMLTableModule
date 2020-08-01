import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XMLTableHeaderComponent } from './xmltable-header.component';

describe('XMLTableHeaderComponent', () => {
  let component: XMLTableHeaderComponent;
  let fixture: ComponentFixture<XMLTableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XMLTableHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XMLTableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
