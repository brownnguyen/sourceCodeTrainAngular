import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  @Input() ghe: any;
  @Output() eventDatGhe = new EventEmitter();
  gheDangDat: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  datGhe() {
    this.gheDangDat = !this.gheDangDat;
    const gheDangDat = {
      SoGhe: this.ghe.SoGhe,
      Gia: this.ghe.Gia,
      TrangThai: this.gheDangDat,
    };
    this.eventDatGhe.emit(gheDangDat);
  }
}
