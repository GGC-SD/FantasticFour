import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpComponent } from './components/help/help.component';
import { NameComponent } from './components/name/name.component';
import { HomeComponent } from './components/home/home.component';
import { MyschoolsComponent } from './components/myschools/myschools.component';
import { AllschoolsComponent } from './components/allschools/allschools.component';


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
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
