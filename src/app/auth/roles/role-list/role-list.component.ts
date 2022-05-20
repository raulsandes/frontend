import { Component, OnInit } from '@angular/core';
import { RoleId } from '../../auth.interfaces';
import { AuthAPIService } from '../../auth.service';

@Component({
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {
  roles$ = this.auth.roles$;
  constructor(public auth: AuthAPIService) { }

  ngOnInit(): void { }

  deleteRole(role: RoleId): void {
    this.auth.deleteRole(role)
        .subscribe();
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
createRole(): void {
    this.auth.createRole({
              role_desc: 'new role',
              entity_id: 0,
              scopes: [],
              master: false,
              app_id: 0
        })
        .subscribe();
}

}
