import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  moviesList: any[] = [];
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.layDanhSachPhim().subscribe({
      next: (result) => {
        console.log(result);
        this.moviesList = result;
      },
      error: (err) => console.log(err),
      complete: () => console.log('DONE'),
    });
  }

  chonPhim(maPhim: string) {
    // Gọi tới service lấy chi tiet phim
    this.moviesService.layChiTietPhim(maPhim).subscribe((result) => {
      console.log(result);
    });
  }
}
