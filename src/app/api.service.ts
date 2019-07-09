import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';
import { Instructor } from './instructor.model'
//import {Observable,of, from } from 'rxjs';

    

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  apiUrl = 'http://localhost:3000/results'
  constructor(private httpClient: HttpClient){}
  
  getData(){
    return this.httpClient.get<Instructor[]>(this.apiUrl)
  }

  getInstructor(id: number){
    return this.httpClient.get<Instructor>(this.apiUrl).find(e => e.id === id)
  }
}
