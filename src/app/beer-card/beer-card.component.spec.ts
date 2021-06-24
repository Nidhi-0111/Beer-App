import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeerService } from '../services/beer.service';

import { HttpClientTestingModule } from "@angular/common/http/testing";
import * as Rx from 'rxjs';
import { delay } from "rxjs/operators";
import { BeerCardComponent } from './beer-card.component';

describe('BeerCardComponent', () => {
  let component: BeerCardComponent;
  let fixture: ComponentFixture<BeerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeerCardComponent ],
      imports:[HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it(' fetchRandomBeer', () => {
    const data=[{"id":50,"name":"Lost Dog (w/Lost Abbey)","tagline":"Rum-Aged Imperial Porter - Lost Abbey Collab.","first_brewed":"11/2011","description":"Our first beer aged in rum casks, Lost Dog saw us brew a collaboration imperial porter with our friends at Lost Abbey. The base beer was packed with toffee, chocolate and roasty notes, balanced with a subtle spicy hop character. The rum casks add a warming, spiced vanilla edge.","image_url":"https://images.punkapi.com/v2/50.png","abv":10,"ibu":35,"target_fg":1012,"target_og":1080,"ebc":80,"srm":40,"ph":4.4,"attenuation_level":85,"volume":{"value":20,"unit":"litres"},"boil_volume":{"value":25,"unit":"litres"},"method":{"mash_temp":[{"temp":{"value":65,"unit":"celsius"},"duration":75}],"fermentation":{"temp":{"value":19,"unit":"celsius"}},"twist":"Aged in rum casks for 12 months"},"ingredients":{"malt":[{"name":"Extra Pale","amount":{"value":4.69,"unit":"kilograms"}},{"name":"Pale Chocolate","amount":{"value":0.23,"unit":"kilograms"}},{"name":"Chocolate","amount":{"value":0.7,"unit":"kilograms"}},{"name":"Dark Crystal","amount":{"value":0.35,"unit":"kilograms"}},{"name":"Flaked Oats","amount":{"value":0.47,"unit":"kilograms"}},{"name":"Caramalt","amount":{"value":0.35,"unit":"kilograms"}}],"hops":[{"name":"First Gold","amount":{"value":35,"unit":"grams"},"add":"start","attribute":"bitter"}],"yeast":"Wyeast 1272 - American Ale II™"},"food_pairing":["Beef satay skewers","Venison & cranberry pie","Blackberry mocha gateaux"],"brewers_tips":"Ageing in barrels brings the ABV up. Recreate rum cask ageing by soaking oak chips in rum then adding to the maturing beer.","contributed_by":"Sam Mason <samjbmason>"}]
    const fixture = TestBed.createComponent(BeerCardComponent);
    const component = fixture.debugElement.componentInstance;
    const service = fixture.debugElement.injector.get(BeerService);
    let spy_getPosts = spyOn(service,"getRandomBeer").and.callFake(() => {
      return Rx.of([]).pipe(delay(100));
    });
    component.fetchRandomBeer();
    expect(component.randomBeer).toEqual(data);
  });
});
