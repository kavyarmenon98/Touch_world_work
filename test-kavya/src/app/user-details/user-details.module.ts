import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailsRoutingModule } from './user-details-routing.module';
import { UserDetailsListComponent } from './user-details-list/user-details-list.component';
import { UserDetailsViewComponent } from './user-details-view/user-details-view.component';


@NgModule({
  declarations: [UserDetailsListComponent, UserDetailsViewComponent],
  imports: [
    CommonModule,
    UserDetailsRoutingModule,
    FormsModule,
     ReactiveFormsModule
  ]
})
export class UserDetailsModule { }
