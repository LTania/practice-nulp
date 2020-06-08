import { Component, OnInit , TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {UserService} from '../shared/user.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(public service: UserService, private modalService: BsModalService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.resetForm();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  close(): void {
    this.modalRef.hide();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.service.formData = {
      userId: 0,
      FirstName: '',
      LastName: '',
      PhoneNumber: '',
      UserEmail: ''
    };
  }

  onSubmit(form: NgForm) {
    this.service.postUser(form.value).subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Додано успішно', 'Вітаємо');
      },
      err => {
        console.log(err);
      }
    )
  }

}
