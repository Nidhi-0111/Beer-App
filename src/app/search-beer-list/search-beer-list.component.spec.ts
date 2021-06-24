import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBeerListComponent } from './search-beer-list.component';

describe('SearchBeerListComponent', () => {
  let component: SearchBeerListComponent;
  let fixture: ComponentFixture<SearchBeerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBeerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBeerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
