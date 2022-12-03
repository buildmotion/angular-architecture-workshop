import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewAccountComponent } from './new-account.component';

const routes: Routes = [{ path: '', component: NewAccountComponent }];

@NgModule({
  declarations: [NewAccountComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class NewAccountModule {}
