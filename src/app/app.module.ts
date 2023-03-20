import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './home/about/about.component';
import { StatusComponent } from './home/status/status.component';
import { ContactComponent } from './home/contact/contact.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProjectComponent } from './project/project.component';
import { ResumeComponent } from './resume/resume.component';
import { ResourceComponent } from './resource/resource.component';
import { V1Component } from './version/v1/v1.component';
import { V2Component } from './version/v2/v2.component';
import { LoaderComponent } from './home/loader/loader.component';
import { HomeComponent } from './home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StatusComponent,
    ContactComponent,
    ProjectComponent,
    ResumeComponent,
    ResourceComponent,
    V1Component,
    V2Component,
    LoaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
