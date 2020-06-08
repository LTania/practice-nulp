import { Injectable } from '@angular/core';
import {User} from './user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: User = {
    userId: null,
    FirstName: null,
    LastName: null,
    PhoneNumber: null,
    UserEmail: null
  };
  readonly rootURL = 'http://localhost:49431/api';

  constructor(private http: HttpClient) { }

  postUser(formData: User) {
   return  this.http.post(this.rootURL + '/Users', formData);
  }
}
