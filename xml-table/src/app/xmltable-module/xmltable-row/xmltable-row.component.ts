import { Component, OnInit } from '@angular/core';
import {XMLService} from '../xml.service';

@Component({
  selector: 'app-xmltable-row',
  templateUrl: './xmltable-row.component.html',
  styleUrls: ['./xmltable-row.component.css']
})
export class XMLTableRowComponent implements OnInit {

  headerValues: [];

  constructor(private service:XMLService) { 
    
  }

  getRowValues(): void {
    this.service.getXMLValues().subscribe(headerValues => {this.headerValues = headerValues, 
      console.log((headerValues));
    });
  }

  ngOnInit(): void {
    this.getRowValues();
  }

}
