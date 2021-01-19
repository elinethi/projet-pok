import { Component, VERSION } from "@angular/core";
import { PokemonService } from "./service/pokemon.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private pokemon: PokemonService) {}
}
