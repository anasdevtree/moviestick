import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppBootstrapModule } from "./app-bootstrap.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { MoviesComponent } from "./movies/movies.component";
import { MovieListComponent } from "./movies/movie-list/movie-list.component";
import { MovieDetailComponent } from "./movies/movie-detail/movie-detail.component";
import { MovieItemComponent } from "./movies/movie-list/movie-item/movie-item.component";
import { DropdownDirective } from "./shared/dropdown.directive";
import { LandingComponent } from "./layout/landing/landing.component";
import { MovieLatestComponent } from "./movies/movie-latest/movie-latest.component";
import { MovieEditComponent } from "./movies/movie-edit/movie-edit.component";
import { MovieService } from "./movies/movie.service";
import { HttpClientModule } from "@angular/common/http";
import { DataStorageService } from "./shared/data-storage.service";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    DropdownDirective,
    MovieListComponent,
    MovieDetailComponent,
    MovieItemComponent,
    LandingComponent,
    MovieLatestComponent,
    MovieEditComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppBootstrapModule,
    HttpClientModule
  ],
  providers: [MovieService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
