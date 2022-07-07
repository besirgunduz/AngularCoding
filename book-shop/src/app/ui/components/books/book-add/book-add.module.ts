import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAddComponent } from './book-add.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BookAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: BookAddComponent }]),
  ],
  exports: [
    BookAddComponent
  ]
})
export class BookAddModule { }
