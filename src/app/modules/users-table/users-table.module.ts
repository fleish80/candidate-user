import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersTableRoutingModule } from './users-table-routing.module';
import { UsersTableComponent } from './pages/users-table.component';

@NgModule({
  declarations: [UsersTableComponent],
  imports: [
    CommonModule,
    UsersTableRoutingModule
  ]
})
export class UsersTableModule { }
