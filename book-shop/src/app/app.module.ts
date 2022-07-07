import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";

import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './ui/login/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    FormsModule,
    ToastrModule.forRoot({
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [
    { provide: 'apiUrl', useValue: 'https://webapi.angulareducation.com/api/' },
    {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }


