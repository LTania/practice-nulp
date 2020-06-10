import { Component, OnInit } from '@angular/core';
import {BookingService} from '../shared/booking.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.sass']
})
export class AdminPageComponent implements OnInit {

  constructor(public service: BookingService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onDelete(BookingId) {
    if (confirm('Видалити бронювання?')){
      this.service.deleteBooking(BookingId)
        .subscribe( res => {
            this.service.refreshList();
            this.toastr.warning('Видалено успішно', 'Повідомлення');
          },
          err => { console.log(err); });
    }
  }
}
