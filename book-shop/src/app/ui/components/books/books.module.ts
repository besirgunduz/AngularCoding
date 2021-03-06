import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './book-add/book-add.component';
import { BookAddModule } from './book-add/book-add.module';

const routes: Routes = [{ path: '', component: BooksComponent }];

@NgModule({
  declarations: [BooksComponent],
  imports: [
    CommonModule,
    BookAddModule,
    RouterModule.forChild(routes)
  ],
  exports: [BooksComponent],
})
export class BooksModule { }
