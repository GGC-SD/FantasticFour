import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpComponent } from './components/help/help.component';
import { NameComponent } from './components/name/name.component';
import { HomeComponent } from './components/home/home.component';
import { MyschoolsComponent } from './components/myschools/myschools.component';
import { AllschoolsComponent } from './components/allschools/allschools.component';

import { SchoolService } from './school.service';

import { AlertsModule } from 'angular-alert-module';

const routes: Routes = [
  { path: 'about', component: AboutUsComponent},
  { path: 'allschools', component: AllschoolsComponent},
  { path: 'myschools', component: MyschoolsComponent},
  { path: 'help', component: HelpComponent},
  { path: 'name', component: NameComponent},
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HelpComponent,
    NameComponent,
    HomeComponent,
    MyschoolsComponent,
    AllschoolsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    AlertsModule.forRoot()
  ],
  providers: [SchoolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
