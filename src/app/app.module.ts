import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntityDetailComponent } from './auth/entites/entity-detail/entity-detail.component';
import { EntityListComponent } from './auth/entites/entity-list/entity-list.component';
import { RoleDetailComponent } from './auth/roles/role-detail/role-detail.component';
import { RoleListComponent } from './auth/roles/role-list/role-list.component';
import { AppDetailComponent } from './auth/apps/app-detail/app-detail.component';
import { AppListComponent } from './auth/apps/app-list/app-list.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './auth/users/user-list/user-list.component';
import { UserDetailComponent } from './auth/users/user-detail/user-detail.component';
import { OrganizationDetailComponent } from './auth/organization/organization-detail/organization-detail.component';
import { OrganizationListComponent } from './auth/organization/organization-list/organization-list.component';
import { OrganizationAssignmentComponent } from './auth/organization/organization-assignments/organization-assignments.component';


@NgModule({
  declarations: [
    AppComponent,
    EntityListComponent,
    EntityDetailComponent,
    RoleDetailComponent,
    RoleListComponent,
    AppDetailComponent,
    AppListComponent,
    MainComponent,
    UserListComponent,
    UserDetailComponent,
    OrganizationDetailComponent,
    OrganizationListComponent,
    OrganizationAssignmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
