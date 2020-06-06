import { Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})
export class BookingComponent implements OnInit {
  date: string;
  maxDateD: Date;
  maxDate: string;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
    this.date = new Date().toISOString().slice(0, 16);
    this.maxDateD = new Date();
    this.maxDateD.setDate(this.maxDateD.getDate() + 7);
    this.maxDate = this.maxDateD.toISOString().slice(0, 16);
  }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  confirm(): void {
    this.modalRef.hide();
  }

}
