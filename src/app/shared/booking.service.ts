import { Injectable } from '@angular/core';
import {Booking} from './booking.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  formData: Booking = {
    BookingId: null,
    FirstName: null,
    LastName: null,
    CountSeats: null,
    Date: null,
    PhoneNumber: null,
    UserEmail: null,
    Wishes: null,
  };
  readonly rootURL = 'http://localhost:49431/api';
  list: Booking[];
  constructor(private http: HttpClient) { }

  postBooking(formData: Booking) {
    return  this.http.post(this.rootURL + '/Booking', formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Booking')
      .toPromise()
      .then(res => this.list = res as Booking[] );
  }

  deleteBooking(id) {
    return this.http.delete(this.rootURL + '/Booking/' + id);
  }
}
