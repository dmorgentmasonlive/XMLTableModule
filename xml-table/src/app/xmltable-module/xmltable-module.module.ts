import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XMLTableHeaderComponent } from './xmltable-header/xmltable-header.component';
import { XMLTableRowComponent } from './xmltable-row/xmltable-row.component';
import { XmltableComponent } from './xmltable/xmltable.component';



@NgModule({
  declarations: [XMLTableHeaderComponent, XMLTableRowComponent, XmltableComponent],
  imports: [
    CommonModule
  ],
  exports:[
    XMLTableHeaderComponent,
    XMLTableRowComponent,
    XmltableComponent
  ]
})
export class XMLTableModuleModule { }
