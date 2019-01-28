import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Movie } from "../movie.model";
import { MovieService } from "../movie.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DataStorageService } from "src/app/shared/data-storage.service";
import { AuthService } from "../../auth/auth.service";
@Component({
  selector: "app-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.css"]
})
export class MovieListComponent implements OnInit, OnDestroy {
  movies: Movie[];
  subscription: Subscription;

  constructor(
    private movieService: MovieService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.subscription = this.movieService.moviesChanged.subscribe(
      (movies: Movie[]) => {
        this.movies = movies;
      }
    );
    this.onLoadMovies();
  }
  onNewMovie() {
    this.router.navigate(["new"], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onSaveMovies() {
    this.dataStorageService.storeMovies().subscribe((response: Response) => {
      console.log(response);
    });
  }
  onLoadMovies() {
    this.dataStorageService.getMovies();
  }
}
