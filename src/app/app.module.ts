import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { SearchBeerListComponent } from './search-beer-list/search-beer-list.component';
import { BeerService } from './services/beer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BeerCardComponent,
    SearchBeerListComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [BeerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
