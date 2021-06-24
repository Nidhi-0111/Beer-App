import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-beer-card',
  templateUrl: './beer-card.component.html',
  styleUrls: ['./beer-card.component.css']
})
export class BeerCardComponent implements OnInit {

  randomBeer: any = {};
  randomNAB = true;
  constructor(private BeerService: BeerService) {}

  ngOnInit() {
    this.fetchRandomBeer();
    this.randomNAB = !this.randomNAB;
  }

  fetchRandomBeer() {
    this.BeerService.getRandomBeer().subscribe(data => {
      const [randombeer] = data;
      console.log("TLL ~ file: beer-card.component.ts ~ line 23 ~ BeerCardComponent ~ this.BeerService.getRandomBeer ~ randombeer", randombeer);
      
      // [Math.floor(Math.random() * 10)]
      this.randomBeer = randombeer;
    });
  }

  fetchRandomNonAlcoholicBeer() {
    this.BeerService.getRandomNonAlcoholicBeer().subscribe(data => {
      this.randomNAB = !this.randomNAB;
      const [firstBeer, secondBeer] = data;
      this.randomBeer = this.randomNAB ? firstBeer : secondBeer;
      console.log(this.randomBeer);
    });
  }

}
