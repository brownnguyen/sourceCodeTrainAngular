import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap, map, mergeMap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { CreateMovie } from '../models/Movies';
@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private moviesListSubject = new BehaviorSubject([]);
  movieList = this.moviesListSubject.asObservable();

  constructor(private http: HttpClient, private api: ApiService) {}

  layDanhSachPhim(): Observable<any> {
    return this.api.get('QuanLyPhim/LayDanhSachPhim').pipe(
      tap((result) => {
        this.moviesListSubject.next(result);
        console.log(this.moviesListSubject.value);
      })
    );
  }

  layChiTietPhim(maPhim?: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('maPhim', maPhim);
    params = params.append('maNhom', 'GP01');
    return this.api.get(`QuanLyPhim/LayThongTinPhim`, {
      params,
    });
  }

  themPhim(values: CreateMovie): Observable<any> {
    const formData = new FormData();
    for (let key in values) {
      formData.append(key, values[key]);
    }
    formData.append('maNhom', 'GP01');

    return this.api.post('QuanLyPhim/ThemPhimUploadHinh', formData).pipe(
      mergeMap((result) => {
        return this.layDanhSachPhim();
      })
    );
  }
}
