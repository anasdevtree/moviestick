import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppBootstrapModule } from "./app-bootstrap.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MoviesComponent } from './movies/movies.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieItemComponent } from './movies/movie-list/movie-item/movie-item.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, MoviesComponent, MovieListComponent, MovieDetailComponent, MovieItemComponent],
  imports: [BrowserModule, AppRoutingModule, AppBootstrapModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
