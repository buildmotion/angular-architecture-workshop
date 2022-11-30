import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../app.module';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { LockComponent } from './lock/lock.component';
import { LoginComponent } from './login/login.component';
import { PagesRoutes } from './pages.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    LockComponent
  ]
})

export class PagesModule { }
