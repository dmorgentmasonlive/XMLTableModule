import { Component, OnInit } from '@angular/core';
import {XMLService} from '../xml.service';

@Component({
  selector: 'app-xmltable-header',
  templateUrl: './xmltable-header.component.html',
  styleUrls: ['./xmltable-header.component.css']
})
export class XMLTableHeaderComponent implements OnInit {

  headerValues: String[];

  constructor(private XMLService: XMLService) { }

  getHeaderValues(): void {
    this.XMLService.getXMLHeaderValues().subscribe(headerValues => {this.headerValues = Object.keys(headerValues); 
      console.log(Object.keys(headerValues));
    });
  }

  ngOnInit(): void {
    this.getHeaderValues();
  }

}
