import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountsComponent } from './accounts/accounts.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
      path        : 'accounts',
      component: AccountsComponent
  },
]

@NgModule({
  declarations: [AccountsComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ]
})
export class AccountsModule { }
