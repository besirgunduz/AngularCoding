import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { FooterComponent } from './layout/footer/footer.component';



@NgModule({
  declarations: [LayoutComponent, NavbarComponent, SidenavComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class UiModule { }
