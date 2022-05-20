import { Component, OnInit } from '@angular/core';
import { OrganizationId } from '../../auth.interfaces';
import { AuthAPIService } from '../../auth.service';

@Component({
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.css']
})
export class OrganizationListComponent implements OnInit {
  organizations$ = this.auth.organizations$;
  constructor(public auth: AuthAPIService) { }

  ngOnInit(): void { }

  deleteOrganization(organization: OrganizationId): void {
    this.auth.deleteOrganization(organization)
        .subscribe();
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
createOrganization(): void {
    this.auth.createOrganization({ organization_name: 'new organization' })
        .subscribe();
}

}
