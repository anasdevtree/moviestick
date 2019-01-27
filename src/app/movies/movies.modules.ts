import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieItemComponent } from "./movie-list/movie-item/movie-item.component";
import { MovieEditComponent } from "./movie-edit/movie-edit.component";
import { MoviesComponent } from "./movies.component";
import { MoviesRoutingModule } from "./movies-routing.module";
import { MovieLatestComponent } from "./movie-latest/movie-latest.component";
@NgModule({
  declarations: [
    MoviesComponent,
    MovieEditComponent,
    MovieListComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MovieLatestComponent
  ],
  imports: [ReactiveFormsModule, CommonModule, MoviesRoutingModule]
})
export class MoviesModule {}
