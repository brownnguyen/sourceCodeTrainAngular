import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap8Component } from './baitap8.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './ghe/ghe.component';

@NgModule({
  declarations: [Baitap8Component, DanhSachGheComponent, GheComponent],
  imports: [CommonModule],
  exports: [Baitap8Component],
})
export class Baitap8Module {}
