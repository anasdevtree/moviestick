import { Component, OnInit, Input } from "@angular/core";

import { Movie } from "../../movie.model";
import { MovieService } from "../../movie.service";

@Component({
  selector: "app-movie-item",
  templateUrl: "./movie-item.component.html",
  styleUrls: ["./movie-item.component.css"]
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;
  constructor(private movieSelected: MovieService) {}

  ngOnInit() {}

  onSelected() {
    this.movieSelected.movieSelected.emit(this.movie);
  }
}
