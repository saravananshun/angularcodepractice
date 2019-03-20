import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PracticeComponent } from './practice/practice.component';
import {RouterModule, Routes} from "@angular/router";


const appRoutes: Routes = [
  {
    path: 'practice',
    component: PracticeComponent,
    data: { title: 'Code Practice' }
  },
  { path: '',
    redirectTo: '/practice',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
