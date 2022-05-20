import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAPIService } from '../../auth.service';
import { Organization, OrganizationId } from '../../auth.interfaces';


@Component({
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.css']
})
export class OrganizationDetailComponent implements OnInit {
  // Observable para o modelo que existe no DB 
  organization$?: Observable<Organization>;

  // O modelo no formulário que existe só aqui no frontend
  organization: FormGroup = this.fb.group({
    organization_id: [''],
    organization_name: ['', Validators.required],
  });

  constructor(private auth: AuthAPIService,
    private fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.organization$ = this.auth.getOrganization(params as OrganizationId);
       this.refresh();
    });
  }

    refresh(): void {
      this.organization$?.subscribe(organization => {
        this.organization.setValue(organization);
      });
    }
  //   ///////////////////////////////////////////////////////////////////////////
  //   ///////////////////////////////////////////////////////////////////////////        
    save(e: Organization): void {
      this.auth.updateOrganization(e)
        .subscribe(() => this.router.navigate(['/organizations']));
    }
}


