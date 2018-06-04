import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material.module';
import { AppComponent, ShellComponent, HomeComponent, EnquiryComponent, AboutComponent, ITILFoundationComponent, ITILServiceStrategyComponent, ITILServiceDesignComponent, ITILServiceTransitionComponent, ITILServiceOperationComponent, ITILContinualServiceImprovementComponent, SOAComponent, PPOComponent, RCVComponent, OSAComponent, MALCComponent, SIAMComponent, CAPMComponent, PMPComponent, ACPComponent, Prince2FComponent, Prince2PComponent, Prince2APComponent, ScrumComponent, CSPOComponent, MSPComponent, SAFeComponent, DevOpsComponent, GreenBeltComponent, BlackBeltComponent, COBITComponent, TOGAFComponent, UpEventsComponent, ServicesComponent, ContactComponent } from './components';
import { QLSRoutes } from './config';
import { coursesList } from './utils';

const qlsRoutes: Routes = QLSRoutes;

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    HomeComponent,
    EnquiryComponent,
    AboutComponent,
    ITILFoundationComponent,
    ITILServiceStrategyComponent,
    ITILServiceDesignComponent,
    ITILServiceTransitionComponent,
    ITILServiceOperationComponent,
    ITILContinualServiceImprovementComponent,
    SOAComponent,
    PPOComponent,
    RCVComponent,
    OSAComponent,
    MALCComponent,
    SIAMComponent,
    CAPMComponent,
    PMPComponent,
    ACPComponent,
    Prince2FComponent,
    Prince2PComponent,
    Prince2APComponent,
    ScrumComponent,
    CSPOComponent,
    MSPComponent,
    SAFeComponent,
    DevOpsComponent,
    GreenBeltComponent,
    BlackBeltComponent,
    COBITComponent,
    TOGAFComponent,
    UpEventsComponent,
    ServicesComponent,
    ContactComponent
  ],
  entryComponents: [
    EnquiryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule,
    MaterialModule,
    RouterModule.forRoot(qlsRoutes),
    HttpClientModule,
    FormsModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
