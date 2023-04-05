import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ProjectComponent } from './project/project.component';
import { ResourceComponent } from './resource/resource.component';
import { ResumeComponent } from './resume/resume.component';
import { V1Component } from './version/v1/v1.component';
import { V2Component } from './version/v2/v2.component';

const appNameTitle = "JoshCyril"

const routes: Routes = [
  {
    path: "",
    title: appNameTitle + ' - Portfolio',
    component: HomeComponent
  },
  {
    path: "project",
    title: appNameTitle + ' - Project',
    component: ProjectComponent
  },
  {
    path: "resume",
    title: appNameTitle + ' - Resume',
    component: ResumeComponent
  },
  {
    path: "resource",
    title: appNameTitle + ' - Resource',
    component: ResourceComponent
  },
  {
    path: "v1",
    title: appNameTitle + ' - Version 1',
    component: V1Component
  },
  {
    path: "v2",
    title: appNameTitle + ' - Version 2',
    component: V2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
