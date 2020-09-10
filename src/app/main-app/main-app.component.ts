import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Film } from './film';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'main-app',
  template: `
    <main>
      <app-list-of-films
        [filmsArray]="films"
        *ngIf="!openedContent"
        class="content">
      </app-list-of-films>
      <app-list-of-favorites
        [filmsArray]="films"
        *ngIf="openedContent"
        class="content">
      </app-list-of-favorites>
    </main>
  `,
  styleUrls: ['./main-app.component.css', './main-colors.sass'],
  providers: [HttpService]
})

export class MainAppComponent implements OnInit {
  @Input() openedContent: boolean;
  // filmsArr: Observable<Object>;
  films: Film[] = [];
  constructor(private httpService: HttpService, private http: HttpClient){
  }
  // Для выполнения get-запроса у объекта HttpClient вызывается метод get(),
  // в который передается адрес запроса
  ngOnInit(): void{
    this.httpService.getFilms().subscribe(data => {
      this.films = data[ "filmList" ];
      // console.log(this.films);
    });
    // this.http.get('./main-app/film')._subscribe((data: Film) => this.film = data);
    // this.filmsArr = this.httpService.getFilms();
  }
}
