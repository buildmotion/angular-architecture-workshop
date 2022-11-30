import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin/admin-layout.component';
import { AuthLayoutComponent } from './auth/auth-layout.component';
import { RouterModule } from '@angular/router';
import { FixedpluginComponent } from './fixedplugin/fixedplugin.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    FixedpluginComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    AdminLayoutComponent,
    AuthLayoutComponent,
    FixedpluginComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LayoutsModule {}
