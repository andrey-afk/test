import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class UserService {

  size = 8;
  
  constructor(private http: HttpClient) { }

getUsers() {
   return this.http.get(`https://randomuser.me/api/?results=${this.size}`).pipe(
     map((response: {results: any[], info: any}) => response.results)).pipe(
     map(users => {
       return users.map(u => {
         return {
           name: u.name.first + ' ' + u.name.last,
           image: u.picture.large,
           geo: u.location.city + ' ' + u.location.state + ' ' + u.location.country

         }
       })
     }))
  }
setSize(size){
  this.size = size;
}
}