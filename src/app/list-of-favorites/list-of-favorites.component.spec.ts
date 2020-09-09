import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfFavoritesComponent } from './list-of-favorites.component';

describe('ListOfFavoritesComponent', () => {
  let component: ListOfFavoritesComponent;
  let fixture: ComponentFixture<ListOfFavoritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfFavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
