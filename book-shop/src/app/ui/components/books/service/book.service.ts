import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BookModel } from '../models/bookModel';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private httpClient: HttpClient,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) { }

  add(file: any, bookModel: BookModel): boolean {
    debugger;
    this.spinner.show();
    let api = this.apiUrl + "books/addImage";

    this.httpClient.post(api, file).subscribe((res: any) => {
      bookModel.imageUrl = res.fileName;
      this.spinner.hide();
      return true;
    }, (err) => {
      this.spinner.hide();
      return false;
    });
    return true;
  }
}
