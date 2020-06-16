import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {UserService} from '../../shared/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }


  onDelete(userId) {
    if (confirm('Видалити бронювання?')){
      this.service.deleteUser(userId)
        .subscribe( res => {
            this.service.refreshList();
            this.toastr.warning('Видалено успішно', 'Повідомлення');
          },
          err => { console.log(err); });
    }
  }

}
