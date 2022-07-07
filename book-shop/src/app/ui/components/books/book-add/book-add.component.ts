import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  addForm: FormGroup;
  file: any;
  formData: any;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private bookService: BookService) { }

  ngOnInit(): void {
    this.createAddForm();
  }

  createAddForm() {
    this.addForm = this.formBuilder.group({
      id: [0],
      name: ["", [Validators.required, Validators.minLength(3)]],
      writer: ["", [Validators.required, Validators.minLength(3)]],
      publishDate: ["", [Validators.required]],
      isActive: [true],
      isAvailable: [true],
      imageUrl: ["", [Validators.required]],
      guid: ["guid"]
    });
  }

  add() {
    if (this.addForm.valid) {
      let result = this.bookService.add(this.formData, this.addForm.value)
      if (result) {
        this.toastr.success("Kitap eklendi.")
        this.addForm.reset();
      }
    } else {
      this.toastr.error("Zorunlu alanları doldurunuz...")
    }
  }

  setImage(event: any) {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      this.formData = new FormData;
      this.formData.append("file", this.file, this.file.name);
      console.log(this.file);
    }
  }

}
