import { Component, OnInit } from '@angular/core';
import { EntityId } from '../../auth.interfaces';
import { AuthAPIService } from '../../auth.service';

@Component({
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {
  entities$ = this.auth.entities$;
  constructor(public auth: AuthAPIService) { }

  ngOnInit(): void { }

  deleteEntity(entity: EntityId): void {
    this.auth.deleteEntity(entity)
        .subscribe();
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
createEntity(): void {
    this.auth.createEntity({ entity_name: 'new entity' })
        .subscribe();
}

}
