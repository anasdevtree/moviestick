import { Movie } from "./movie.model";
export class MovieService {
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

  getMovies() {
    return this.movies.slice();
  }
  getMovie(index: number) {
    return this.movies[index];
  }
}
