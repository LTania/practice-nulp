import { Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {BookingService} from '../shared/booking.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})
export class BookingComponent implements OnInit {
  date: string;
  dateD: Date;
  modalRef: BsModalRef;

  constructor(public service: BookingService, private modalService: BsModalService, private toastr: ToastrService) {
    this.dateD = new Date();
    this.dateD.setDate(this.dateD.getDate() + 1);
    this.date = this.dateD.toISOString().slice(0, 16);
  }

  ngOnInit(): void {
    this.resetForm();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      BookingId: 0,
      FirstName: '',
      LastName: '',
      CountSeats: 0,
      Date: '',
      PhoneNumber: '',
      UserEmail: '',
      Wishes: 'Немає'
    };
  }
  onSubmit(form1: NgForm) {
    this.service.postBooking(form1.value).subscribe(
      res => {
        this.resetForm(form1);
      },
      err => {
        console.log(err);
      }
    );
  }
  confirm(): void {
    this.modalRef.hide();
  }

}
