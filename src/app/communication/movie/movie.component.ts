import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  @Input() phim: any;
  @Output() eventPhim = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    console.log(this.phim);
  }

  chonPhim() {
    // Đẩy phim đang chọn ra ngoài thằng cha
    // bằng cách sử dụng output
    this.eventPhim.emit(this.phim);
  }
}
