import { Movie } from "./movie.model";
import { EventEmitter } from "@angular/core";
export class MovieService {
  movieSelected = new EventEmitter();
  private movies: Movie[] = [
    new Movie(
      "First Movie",
      "This movie will show the art of tech",
      "https://pmcvariety.files.wordpress.com/2017/03/spider-man-homecoming.png"
    ),
    new Movie(
      "First Movie 2",
      "This movie will show the art of tech",
      "https://pmcvariety.files.wordpress.com/2017/03/spider-man-homecoming.png"
    )
  ];

  getMovie() {
    return this.movies.slice();
  }
}
