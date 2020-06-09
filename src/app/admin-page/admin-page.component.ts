import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.sass']
})
export class AdminPageComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  onDelete(userId) {
    if (confirm('Видалити користувача?')){
      this.service.deleteUser(userId)
        .subscribe( res => {
            this.service.refreshList();
            this.toastr.warning('Видалено успішно', 'Повідомлення');
          },
          err => { console.log(err); });
    }
  }

}
