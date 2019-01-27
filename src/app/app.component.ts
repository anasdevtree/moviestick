import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = "movie";
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA7AGbOWE8b9ES_DVLn_ADsuoV3r5ylXzA",
      authDomain: "moviestick-31d4c.firebaseapp.com"
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
