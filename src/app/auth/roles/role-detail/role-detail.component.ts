import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAPIService } from '../../auth.service';
import { Role, RoleId } from '../../auth.interfaces';


@Component({
  templateUrl: './role-detail.component.html',
  styleUrls: ['./role-detail.component.css']
})
export class RoleDetailComponent implements OnInit {
  apps$ = this.auth.apps$;
  entities$ = this.auth.entities$;
  // Observable para o modelo que existe no DB 
  role$?: Observable<Role>;

  // O modelo no formulário que existe só aqui no frontend
  role: FormGroup = this.fb.group({
    role_id: [''],
    role_desc: ['', Validators.required],
    entity_id:  ['', Validators.required],
    scopes:  ['', Validators.required],        
    master: ['', Validators.required],
    app_id: ['', Validators.required]
  });



  constructor(private auth: AuthAPIService,
    private fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.role$ = this.auth.getRole(params as RoleId);
       this.refresh();
    });
  }

    refresh(): void {
      this.role$?.subscribe(role => {
        this.role.setValue(role);
      });
    }
  //   ///////////////////////////////////////////////////////////////////////////
  //   ///////////////////////////////////////////////////////////////////////////        
    save(e: Role): void {
      this.auth.updateRole(e)
        .subscribe(() => this.router.navigate(['/roles']));
    }
}


