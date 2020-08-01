import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class XMLService {

  private XMLURL1 = 'http://localhost:3000/customers/1';
  private XMLURL2 = 'http://localhost:3000/customers';

  getXMLHeaderValues(): Observable<[]> {
    return this.http.get<[]>(this.XMLURL1);
  }

  getXMLValues(): Observable<[]>{
    return this.http.get<[]>(this.XMLURL2);
  }

  constructor(private http: HttpClient) { }
}
