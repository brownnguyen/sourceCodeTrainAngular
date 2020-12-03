import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  isShow: boolean = true;
  isLogin: boolean = false;
  color: string = 'red';
  dssv: any[] = [
    { hoTen: 'Tý', lop: 'FE40' },
    { hoTen: 'Sửu', lop: 'FE40' },
    { hoTen: 'Dần', lop: 'FE40' },
    { hoTen: 'Mẹo', lop: 'FE40' },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.isShow = !this.isShow;
  }

  dangNhap() {
    this.isLogin = true;
  }

  dangXuat() {
    this.isLogin = false;
  }
}
