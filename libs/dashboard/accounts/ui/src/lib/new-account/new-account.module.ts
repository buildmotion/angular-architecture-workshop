import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewAccountComponent } from './new-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewAccountUiService } from './new-account-ui.service';
import { AccountsService } from '@buildmotion/dashboard-accounts-service';

const routes: Routes = [{ path: '', component: NewAccountComponent }];

@NgModule({
  declarations: [NewAccountComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule,
    ReactiveFormsModule,],
  providers: [NewAccountUiService, AccountsService]
})
export class NewAccountModule {}
