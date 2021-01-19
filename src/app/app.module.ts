import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CarteComponent } from "./carte/carte.component";
import { PokemonService } from "./service/pokemon.service";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, CarteComponent],
  bootstrap: [AppComponent],
  providers: [PokemonService]
})
export class AppModule {}
