import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { HomeComponent } from './home/home.component';

const qlsRoutes: Routes = [
  {
    path:'',
    component:ShellComponent,
    children:[
      {
        path:'',
        component: HomeComponent
      }
    ]
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule,
    RouterModule.forRoot(qlsRoutes),
    HttpClientModule,
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
