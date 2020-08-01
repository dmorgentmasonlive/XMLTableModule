import { Component, OnInit } from '@angular/core';
import {XMLService} from '../xml.service';

@Component({
  selector: 'app-xmltable',
  templateUrl: './xmltable.component.html',
  styleUrls: ['./xmltable.component.css']
})
export class XmltableComponent implements OnInit {

  headerValues = [];
  values = [];

  constructor(private service:XMLService) { }

  getHeaderValues(): void {
    this.service.getXMLHeaderValues().subscribe(headerValues => {this.headerValues = Object.keys(headerValues); 
      console.log(Object.keys(headerValues));
    });
  }

  getRowValues(): void {
    this.service.getXMLValues().subscribe(headerValues => {this.values = headerValues, 
      console.log((headerValues));
    });
  }

  ngOnInit(): void {
    this.getHeaderValues();
    this.getRowValues();
  }
}
