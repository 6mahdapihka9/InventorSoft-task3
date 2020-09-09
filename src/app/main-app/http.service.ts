import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toArray} from 'rxjs/operators';
import {observable} from 'rxjs';

// Поскольку сервис принимает в конструкторе параметр через механизм dependency injection,
// то к классу применяется декоратор @Injectable.
@Injectable()
export class HttpService{
  // Для отправки запросов сервис получает объект HttpClient
  constructor(private http: HttpClient){ }

  getFilms(){

    // console.log(this.http.get('assets/list_of_films.json'));
    return this.http.get('assets/list_of_films.json');
  }
}
