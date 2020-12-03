import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  message: string = 'Hello Cybersoft';
  fullName: string = '';
  email: string = '';
  fullName1: string = '';
  email1: string = '';
  constructor() {}

  ngOnInit(): void {}

  changeData(name: string) {
    console.log(name);
    this.message = name;
  }

  changeInputData(fullName: string) {
    this.fullName = fullName;
  }

  submit(fullname: string) {
    this.fullName1 = fullname;
  }
}
