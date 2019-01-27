import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MoviesComponent } from "./movies/movies.component";
import { LandingComponent } from "./layout/landing/landing.component";
import { MovieLatestComponent } from "./movies/movie-latest/movie-latest.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { MovieEditComponent } from "./movies/movie-edit/movie-edit.component";
import { SignupComponent } from "./auth/signup/signup.component";

const appRoutes: Routes = [
  { path: "", component: LandingComponent },
  {
    path: "movies",
    component: MoviesComponent,
    children: [
      { path: "", component: MovieLatestComponent },
      { path: "new", component: MovieEditComponent },
      { path: ":id", component: MovieDetailComponent },
      { path: ":id/edit", component: MovieEditComponent }
    ]
  },
  { path: "signup", component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
