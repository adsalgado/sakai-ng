import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './list/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserManagementResolve } from './users.route';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    data: {
      defaultSort: 'id,asc'
    },
  },
  {
    path: ':login/view',
    component: UserDetailComponent,
    resolve: {
      user: UserManagementResolve,
    }
  },
  {
    path: 'new',
    component: UserUpdateComponent,
    resolve: {
      user: UserManagementResolve,
    },
  },
  {
    path: ':login/edit',
    component: UserUpdateComponent,
    resolve: {
      user: UserManagementResolve,
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }


