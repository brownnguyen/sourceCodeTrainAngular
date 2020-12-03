import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationComponent } from './communication.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [CommunicationComponent, ListMovieComponent, MovieComponent],
  imports: [CommonModule],
  exports: [CommunicationComponent],
})
export class CommunicationModule {}
