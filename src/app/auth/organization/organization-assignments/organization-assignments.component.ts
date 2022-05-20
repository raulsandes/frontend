import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAPIService } from '../../auth.service';
import { Assignment, Organization, OrganizationId, UserId } from '../../auth.interfaces';
import { omit } from 'lodash-es';


@Component({
  templateUrl: './organization-assignments.component.html',
  styleUrls: ['./organization-assignments.component.css']
})
export class OrganizationAssignmentComponent implements OnInit {
  // Observable para o modelo que existe no DB 
  assignment!: Assignment;
  id!: OrganizationId;

  // O modelo no formulário que existe só aqui no frontend
  assignment_: FormGroup = this.fb.group({
    assign_id: ['', Validators.required],
    starts_at: ['', Validators.required],
    expires_at: ['', Validators.required],
    revoked_at: ['', Validators.required],
  });

  constructor(private auth: AuthAPIService,
    private fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.reload(); 
    }

    reload() : void {
      this.assignment_.setValue({
        assign_id:  'assing id',
        starts_at:  'starts',
        expires_at: 'expires',
        revoked_at: 'revoked',
      });
    }
  
      // refresh(): void {
      //   this.assignment_.setValue({this.assignment});
      // }
  
      // reload():void {
      //   this.route.params.subscribe(params => {
      //     this.auth.listAssignment(params as OrganizationId ).subscribe(assign => {
      //       this.assignment = assign;
      //       this.assignment_.setValue({});
      //     });
      //   });
      // }
  
    //   ///////////////////////////////////////////////////////////////////////////
    //   ///////////////////////////////////////////////////////////////////////////        
      save(o: Organization, assign: Assignment): void {
        this.auth.updateAssignment(o, assign)
          .subscribe(() => this.reload());
      }
  
      createAssignment(id: OrganizationId, assign: Assignment): void {
        if(this.assignment !== undefined){
          this.auth.createAssignment(id, assign)
              .subscribe(() => this.reload());
        }
      }
  
       deleteAssignment(id: OrganizationId, assign: Assignment) {
        this.auth.deleteAssignment(id, assign)
            .subscribe(() => this.reload());
       }
}


