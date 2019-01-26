import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
import { Movie } from "../movie.model";
@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit {
  @Output() movieWasSelected = new EventEmitter<Movie>();
  movies: Movie[] = [
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

  constructor() {}

  ngOnInit() {}

  onMovieSelected(movie: Movie) {
    this.movieWasSelected.emit(movie);
  }
}
