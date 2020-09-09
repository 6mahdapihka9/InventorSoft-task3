import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-of-films',
  template: `
    <div class="content-item" *ngFor="let film of filmsArray">
      <img [srcset]="film.image" alt="">
      <div class="content-item-data">
        <p>Name: {{film.name}}</p>
        <p>Description: {{film.description}}</p>
        <p>Price: {{film.price}}$</p>
        <button [ngClass]="{addToFav: true}" *ngIf="!isFav(film.id)" (click)="addToFav(film.id)">Add to favourite</button>
        <button [ngClass]="{removeFromFav: true}" *ngIf="isFav(film.id)" (click)="removeFromFav(film.id)">Remove from favourite</button>
<!--        <button (click)="show(film.id)">Show film</button>-->
      </div>
    </div>
  `,
  styleUrls: ['./list-of-films.component.css']
})

export class ListOfFilmsComponent implements OnInit {
  // массыв ильмов из MainAppComponent
  @Input() filmsArray: object[];
  ls: Storage;
// "ids" : "1,2,3,4,5"
// "id": "true"
  constructor() {
  }

  ngOnInit(): void {
    this.ls = window.localStorage;
    // console.log(this.filmsArray);
  }
  addToFav(id: number): void{
    // console.log(id);
    this.ls.setItem('' + id, 'true');
  }
  removeFromFav(id: number): void{
    this.ls.removeItem('' + id);
  }
  // метод выбора кнопки для отображения
  isFav(filmsId: number): boolean{
    return (this.ls.getItem('' + filmsId) !== null);
  }
  show(id: number): void{
    // console.log(this.filmsArray[id]);
    for (let k in Object.keys(this.ls)){
      console.log(k);
    }
  }
}
