import { Component, OnInit } from "@angular/core";
import { PokemonService } from "../service/pokemon.service";
import { Pokemon } from "../interfaces/pokemon";

@Component({
  selector: "app-deck",
  templateUrl: "./deck.component.html",
  styleUrls: ["./deck.component.css"]
})
export class DeckComponent implements OnInit {
  data: Pokemon;
  constructor(private pokemonService: PokemonService) {}

  async ngOnInit() {
    this.data = await this.pokemonService.pokemon("7");
    console.log(this.data);
  }
}
