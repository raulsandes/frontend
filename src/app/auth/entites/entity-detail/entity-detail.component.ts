import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAPIService } from '../../auth.service';
import { Entity, EntityId } from '../../auth.interfaces';


@Component({
  templateUrl: './entity-detail.component.html',
  styleUrls: ['./entity-detail.component.css']
})
export class EntityDetailComponent implements OnInit {
  // Observable para o modelo que existe no DB 
  entity$?: Observable<Entity>;

  // O modelo no formulário que existe só aqui no frontend
  entity: FormGroup = this.fb.group({
    entity_id: [''],
    entity_name: ['', Validators.required],
  });

  constructor(private auth: AuthAPIService,
    private fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.entity$ = this.auth.getEntity(params as EntityId);
       this.refresh();
    });
  }

    refresh(): void {
      this.entity$?.subscribe(entity => {
        this.entity.setValue(entity);
      });
    }
  //   ///////////////////////////////////////////////////////////////////////////
  //   ///////////////////////////////////////////////////////////////////////////        
    save(e: Entity): void {
      this.auth.updateEntity(e)
        .subscribe(() => this.router.navigate(['/entities']));
    }
}


