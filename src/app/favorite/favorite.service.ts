import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';


import { Character } from '../character/character';

@Injectable()
export class FavoriteService {

  private favoriteSubject = new Subject<Character[]>();
  favorites: Observable<Character[]>;


  favoritesImage: Character[];

  constructor() {
    this.favoritesImage = []
    this.favorites = this.favoriteSubject.asObservable();
  }

  addCharacter (character) {
    console.log('passe ds le service ' + character.name);
    this.favoritesImage.push(character);
    this.favoriteSubject.next(this.favoritesImage);
  }

}
