import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuperHerosDetailComponent } from './super-heros-detail/super-heros-detail.component';
import { SuperHerosListComponent } from './super-heros-list/super-heros-list.component';

const routes: Routes = [
  {
  path:'',
  component: SuperHerosListComponent
  },
  {
    path:'detail',
    component: SuperHerosDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
