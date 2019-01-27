import { Component, OnInit } from "@angular/core";
import { Movie } from "../movie.model";
import { MovieService } from "../movie.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: "app-movie-detail",
  templateUrl: "./movie-detail.component.html",
  styleUrls: ["./movie-detail.component.css"]
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  id: number;

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.movie = this.movieService.getMovie(this.id);
    });
  }

  onEditMovie() {
    this.router.navigate(["edit"], { relativeTo: this.route });
  }
  onDeleteMovie() {
    this.movieService.deleteMovie(this.id);
    this.router.navigate(["/movies"]);
  }
}
