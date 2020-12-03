import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  constructor(private ActivatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe((params) => {
      console.log(params);
    });
  }
}
