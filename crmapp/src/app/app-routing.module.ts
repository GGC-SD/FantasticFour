import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component';
import {HelpComponent} from './help/help.component';
import {NameComponent} from './name/name.component';



const routes: Routes = [
  { path: 'about', component: AboutUsComponent},
  { path: 'help', component: HelpComponent},
  { path: 'name', component: NameComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }
export const routingComponents = [AboutUsComponent, HelpComponent, NameComponent];
