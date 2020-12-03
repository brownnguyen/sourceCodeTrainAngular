import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { DetailComponent } from './detail/detail.component';
import { NewsComponent } from './news/news.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { PipeModule } from '../shared/pipe/pipe.module';

const router: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'detail/:maPhim', component: DetailComponent },
      { path: 'news', component: NewsComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomePageComponent,
    DetailComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, PipeModule, RouterModule.forChild(router)],
})
export class HomeModule {}
