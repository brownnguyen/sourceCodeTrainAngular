import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap6',
  templateUrl: './baitap6.component.html',
  styleUrls: ['./baitap6.component.scss'],
})
export class Baitap6Component implements OnInit {
  dssp: any[] = [
    { maSP: 1, tenSP: 'Iphone 11', gia: '2500000' },
    { maSP: 2, tenSP: 'Samsung Note 10', gia: '2000000' },
    { maSP: 3, tenSP: 'Huawei P30', gia: '1800000' },
  ];
  constructor() {}

  ngOnInit(): void {}

  themSanPham(maSP: number, tenSP: string, gia: string) {
    const sanPham = { maSP, tenSP, gia };
    this.dssp.push(sanPham);
  }

  dangNhap(tk, mk) {
    console.log(tk, mk);
  }
}
