import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LegalComponent } from './legal.component';

const routes: Routes = [{ path: '', component: LegalComponent }];

@NgModule({
  declarations: [LegalComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LegalModule {}
