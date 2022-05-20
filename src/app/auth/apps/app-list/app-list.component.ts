import { Component, OnInit } from '@angular/core';
import { AppId, } from '../../auth.interfaces';
import { AuthAPIService } from '../../auth.service';

@Component({
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {
  apps$ = this.auth.apps$;
  constructor(public auth: AuthAPIService) { }

  ngOnInit(): void { }

  deleteApp(app: AppId): void {
    this.auth.deleteApp(app)
      .subscribe();
  }

  ///////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////
  createApp(): void {
    this.auth.createApp({
      app_name: 'new app',
      scopes: [],
      app_url: ''
    })
      .subscribe();
  }

}
