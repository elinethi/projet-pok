import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { CarteComponent } from "./carte/carte.component";
import { PokemonService } from "./service/pokemon.service";
import { HttpClientModule } from "@angular/common/http";
import { DeckComponent } from "./deck/deck.component";
import { BoutiqueComponent } from "./boutique/boutique.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: "hello", component: HelloComponent },
  { path: "deck", component: DeckComponent },
  { path: "boutique", component: BoutiqueComponent },
  { path: "", redirectTo: "/deck", pathMatch: "full" }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    CarteComponent,
    DeckComponent,
    BoutiqueComponent
  ],
  bootstrap: [AppComponent],
  providers: [PokemonService]
})
export class AppModule {}
