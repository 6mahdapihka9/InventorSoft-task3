import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {toArray} from 'rxjs/operators';
import {observable} from 'rxjs';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getFilms(){

    // console.log(this.http.get('assets/list_of_films.json'));
    return this.http.get('assets/list_of_films.json');
  }
}
