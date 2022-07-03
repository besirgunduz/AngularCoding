import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LayoutModule,
    LoginModule
  ],
  exports:[
    CommonModule,
    ComponentsModule,
    LayoutModule,
    LoginModule
  ]
})
export class UiModule { }
