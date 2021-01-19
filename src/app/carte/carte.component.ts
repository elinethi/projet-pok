import { Component, OnInit, OnChanges,Input, Output, EventEmitter } from "@angular/core";
import { Pokemon } from "../interfaces/pokemon";

@Component({
  selector: "app-carte",
  templateUrl: "./carte.component.html",
  styleUrls: ["./carte.component.css"]
})
export class CarteComponent implements OnInit {
  /*pokemons = [
    {
      _id: "5fb64130183ebe3f02f31297",
      poke_id: 150,
      name: "mewtwo",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      type: "psychic",
      stats: {
        attack: 90,
        hp: 130,
        speed: 106,
        defense: 154
      },
      __v: 0
    },
    {
      _id: "5fb6411e183ebe3f02f31206",
      poke_id: 5,
      name: "charmeleon",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
      type: "fire",
      stats: {
        attack: 65,
        hp: 80,
        speed: 58,
        defense: 80
      },
      __v: 0
    }
  ];
  */

  @Input() data: Pokemon;

  constructor() {}

  ngOnInit() {}
}
