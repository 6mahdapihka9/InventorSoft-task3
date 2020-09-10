import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-favorites',
  templateUrl: './list-of-favorites.component.html',
  styleUrls: ['./list-of-favorites.component.css']
})
export class ListOfFavoritesComponent implements OnInit {
  @Input() filmsArray: object;
  ls: Storage;
  sum: number;
  constructor() {
  }

  ngOnInit(): void {
    this.ls = window.localStorage;
    this.reCalc();
  }
  isFav(filmsId: number): boolean{
    return (this.ls.getItem('' + filmsId) !== null);
  }
  removeAll(): void{
    // полная очистка и пересчет сумы
    this.ls.clear();
    this.reCalc();
  }
  removeFromFav(id: number): void{
    this.ls.removeItem('' + id);
    this.reCalc();
  }
  reCalc(): void{
    this.sum = 0;
    // перебираю все ключи в localStorage
    // и ним выбираю цены фильмов
    for (let k in Object.keys(this.ls)){
      this.sum += this.filmsArray[k].price;
      // console.log( this.filmsArray[k].price + ' ' + typeof this.filmsArray[k].price);
    }
    // console.log(this.sum);
  }
}
