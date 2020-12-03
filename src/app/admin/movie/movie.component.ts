import { Component, OnInit } from '@angular/core';
import { CreateMovie } from 'src/app/core/models/Movies';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}
  moviesList: any;
  hinhAnh: any;

  ngOnInit(): void {
    this.moviesService.layDanhSachPhim().subscribe();

    this.moviesService.movieList.subscribe({
      next: (result) => (this.moviesList = result),
    });
  }

  handleChangeFile(evt) {
    console.log(evt.target.files);
    this.hinhAnh = evt.target.files[0];
  }

  themPhim(values) {
    const newValues = { ...values, hinhAnh: this.hinhAnh };
    this.moviesService.themPhim(newValues).subscribe((result) => {
      console.log(result);
    });
  }
}
