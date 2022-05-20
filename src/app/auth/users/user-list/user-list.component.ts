import { Component, OnInit } from '@angular/core';
import { UserId } from '../../auth.interfaces';
import { AuthAPIService } from '../../auth.service';

@Component({
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$ = this.auth.users$;
  constructor(public auth: AuthAPIService) { }

  ngOnInit(): void { }

  deleteUser(user: UserId): void {
    this.auth.deleteUser(user)
      .subscribe();
  }

  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  createUser(): void {
    this.auth.createUser({
      user_name: 'new user',
      user_pass: '',
      user_email: '',
      active: false,
    })
      .subscribe();
  }

}
