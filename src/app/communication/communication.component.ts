import { Component, OnInit, ViewChild } from '@angular/core';
import { ListMovieComponent } from './list-movie/list-movie.component';
@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss'],
})
export class CommunicationComponent implements OnInit {
  @ViewChild(ListMovieComponent) listMovie: ListMovieComponent;
  constructor() {}

  ngOnInit(): void {}

  themPhim(maPhim, tenPhim, gia, hinhAnh) {
    this.listMovie.danhSachPhim.push({ maPhim, tenPhim, gia, hinhAnh });
  }
}
