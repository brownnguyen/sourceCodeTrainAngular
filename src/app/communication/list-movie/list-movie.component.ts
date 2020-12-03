import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss'],
})
export class ListMovieComponent implements OnInit {
  danhSachPhim: any[] = [
    {
      maPhim: 1,
      tenPhim: 'Minions',
      gia: '85000',
      hinhAnh: 'assets/images/minions.jpg',
    },
    {
      maPhim: 2,
      tenPhim: 'Home',
      gia: '85000',
      hinhAnh: 'assets/images/home.jpg',
    },
    {
      maPhim: 3,
      tenPhim: 'Harvie',
      gia: '85000',
      hinhAnh: 'assets/images/harvie.jpg',
    },
    {
      maPhim: 4,
      tenPhim: 'Insideout',
      gia: '85000',
      hinhAnh: 'assets/images/insideout.jpg',
    },
  ];
  phimDangChon: any;
  constructor() {}

  ngOnInit(): void {}

  chonPhim(phim: any) {
    console.log(phim);
    this.phimDangChon = phim;
  }
}
