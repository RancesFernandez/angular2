import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor( private http: HttpClient) { }

  getPaises(){
    return this.http.get('');
  }
}
