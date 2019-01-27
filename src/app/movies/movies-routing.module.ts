import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "../auth/auth-guard.service";
import { MovieEditComponent } from "./movie-edit/movie-edit.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MoviesComponent } from "./movies.component";
import { LandingComponent } from "../layout/landing/landing.component";

const moviesRoutes: Routes = [
  {
    path: "movies",
    component: MoviesComponent,
    children: [
      { path: "", component: LandingComponent },
      { path: "new", component: MovieEditComponent, canActivate: [AuthGuard] },
      { path: ":id", component: MovieDetailComponent },
      {
        path: ":id/edit",
        component: MovieEditComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(moviesRoutes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
