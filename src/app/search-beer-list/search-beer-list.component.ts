import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';

@Component({
  selector: 'app-search-beer-list',
  templateUrl: './search-beer-list.component.html',
  styleUrls: ['./search-beer-list.component.css']
})
export class SearchBeerListComponent implements OnInit {

  beerList: any = [];
  filterByType: string = 'name';
  filterByVal: string = '';

  constructor(private BeerService: BeerService) {}

  ngOnInit() {
    this.fetchBeersByDesc();
  }
  fetchBeersByName() {
    const searchString = this.filterByVal.replace(/ /g, '_')
    this.BeerService.fetchBeersByName(searchString).subscribe(data => {
      this.beerList = data;
    });
  }

  fetchBeersByDesc() {
    this.BeerService.fetchBeers().subscribe(data => {
        this.beerList = data.filter((beer:any) => 
          beer.description.toLowerCase().includes(this.filterByVal)
        );
    });
  }

  searchBeers() {
    if(this.filterByType === 'name') {
      this.fetchBeersByName()
    } else {
      this.fetchBeersByDesc()
    }
  }

}
