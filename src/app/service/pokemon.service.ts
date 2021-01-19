import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Pokemon } from "../interfaces/pokemon";
@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {}

  pokemon(id: string) {
    return this.http
      .get<Pokemon>("https://lostin70s.com/lpwebfront/api/pokemon/" + id)
      .toPromise();
  }
}
