import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { EntryEditorComponent } from './entry-editor/entry-editor.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {WorkoutsApiService} from './services/workouts-api.service';
import {NgxLoadingModule} from 'ngx-loading';
import {FormsModule} from '@angular/forms';
import {NgbDateAdapter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DateStringAdapterService} from './services/date-string-adapter.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutsComponent,
    EntryEditorComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgxLoadingModule.forRoot({}),
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    WorkoutsApiService,
    {provide: NgbDateAdapter, useClass: DateStringAdapterService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
