import {Component} from "angular2/core";
import {RouteConfig, RouterLink, RouterOutlet, ROUTER_PROVIDERS } from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

// ==============================================================================
// -- Main App
// ==============================================================================

@Component({
  selector: "app",
  template: "<h1>Tega</h1>"
//   templateUrl: "/components/app.template.html",
//   directives: [ContentComponent, LoginComponent, RouterLink, RouterOutlet],
//   viewProviders: [ROUTER_PROVIDERS, HTTP_PROVIDERS, MyModel]

})
// @RouteConfig([
//   { path: "/login", name: "Login", component: LoginComponent, useAsDefault: true },
//   { path: "/content", name: "Content", component: ContentComponent },
//   { path: "/chart", name: "Chart", component: ChartComponent }
// ])
export class AppComponent {
  constructor() {
    console.log("Constructing Main App");
  }

}
