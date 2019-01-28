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
    const token = this.authService.getToken();
    return this.httpClient.put(
      "https://moviestick-31d4c.firebaseio.com/movies.json?auth=" + token,
      this.movieService.getMovies()
    );
  }

  getMovies() {
    this.httpClient
      .get<Movie[]>("https://moviestick-31d4c.firebaseio.com/movies.json")
      .subscribe((movies: Movie[]) => {
        this.movieService.setMovies(movies);
      });
  }
}
