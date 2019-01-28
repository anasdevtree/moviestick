import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppBootstrapModule } from "./app-bootstrap.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { LandingComponent } from "./layout/landing/landing.component";
import { MovieService } from "./movies/movie.service";
import { HttpClientModule } from "@angular/common/http";
import { DataStorageService } from "./shared/data-storage.service";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { AuthService } from "./auth/auth.service";
import { AuthGuard } from "./auth/auth-guard.service";
import { MoviesModule } from "./movies/movies.modules";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialsModule } from "./materials/materials.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AppBootstrapModule,
    HttpClientModule,
    MoviesModule,
    BrowserAnimationsModule,
    MaterialsModule
  ],
  providers: [MovieService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
