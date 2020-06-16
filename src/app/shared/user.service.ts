import { Injectable } from '@angular/core';
import {User} from './user.model';
import {HttpClient} from '@angular/common/http';
import {Booking} from './booking.model';

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
  list: User[];
  constructor(private http: HttpClient) { }

  postUser(formData: User) {
   return  this.http.post(this.rootURL + '/Users', formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Users')
      .toPromise()
      .then(res => this.list = res as User[] );
  }

  deleteUser(id) {
    return this.http.delete(this.rootURL + '/Users/' + id);
  }
}
