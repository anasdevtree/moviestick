import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";

import { MovieService } from "../movies/movie.service";
import { Movie } from "../movies/movie.model";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(
    private httpClient: HttpClient,
    private movieService: MovieService,
    private authService: AuthService
  ) {}

  storeMovies() {
    return this.httpClient.put(
      "https://moviestick-31d4c.firebaseio.com/movies.json",
      this.movieService.getMovies()
    );
  }

  getMovies() {
    const token = this.authService.getToken();
    this.httpClient
      .get<Movie[]>(
        "https://moviestick-31d4c.firebaseio.com/movies.json?auth=" + token
      )
      .subscribe((movies: Movie[]) => {
        this.movieService.setMovies(movies);
      });
  }
}