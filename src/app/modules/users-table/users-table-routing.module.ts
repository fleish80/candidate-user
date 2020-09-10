import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersTableComponent } from './pages/users-table.component';

const routes: Routes = [{ path: '', component: UsersTableComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersTableRoutingModule { }
