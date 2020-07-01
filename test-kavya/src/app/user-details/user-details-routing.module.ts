import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsListComponent } from './user-details-list/user-details-list.component';
import { UserDetailsViewComponent } from './user-details-view/user-details-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'user-detail-list',
    pathMatch: 'full'
  },
  {
    path: 'user-detail-list',
    component: UserDetailsListComponent
  },
  {
    path: 'user-detail-view',
    component: UserDetailsViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserDetailsRoutingModule { }
