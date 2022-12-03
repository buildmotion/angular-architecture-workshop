import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewAccountComponent } from './new-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: NewAccountComponent }];

@NgModule({
  declarations: [NewAccountComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule,
    ReactiveFormsModule,],
})
export class NewAccountModule {}
