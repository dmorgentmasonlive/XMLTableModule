import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XMLTableRowComponent } from './xmltable-row.component';

describe('XMLTableRowComponent', () => {
  let component: XMLTableRowComponent;
  let fixture: ComponentFixture<XMLTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XMLTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XMLTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
