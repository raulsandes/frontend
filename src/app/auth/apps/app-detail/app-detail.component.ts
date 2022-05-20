import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthAPIService } from '../../auth.service';
import { App, AppId } from '../../auth.interfaces';


@Component({
  templateUrl: './app-detail.component.html',
  styleUrls: ['./app-detail.component.css']
})
export class AppDetailComponent implements OnInit {
  // Observable para o modelo que existe no DB 
  app$?: Observable<App>;

  // O modelo no formulário que existe só aqui no frontend
  app: FormGroup = this.fb.group({
    app_id: [''],
    app_name: ['', Validators.required],
    app_url: ['', Validators.required],
    scopes: ['', Validators.required]
  });

  constructor(private auth: AuthAPIService,
    private fb: FormBuilder,
    public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.app$ = this.auth.getApp(params as AppId);
       this.refresh();
    });
  }

    refresh(): void {
      this.app$?.subscribe(app => {
        this.app.setValue(app);
      });
    }
  //   ///////////////////////////////////////////////////////////////////////////
  //   ///////////////////////////////////////////////////////////////////////////        
    save(e: App): void {
      this.auth.updateApp(e)
        .subscribe(() => this.router.navigate(['/apps']));
    }
}


