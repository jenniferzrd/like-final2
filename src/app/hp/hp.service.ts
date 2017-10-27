import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// CUSTOM INTERFACE
import { Character } from '../character/character';

const URL = 'http://hp-api.herokuapp.com/api/characters';

@Injectable()
export class HpService {

  private characterSubject = new Subject<Character[]>();
  characters: Observable<Character[]>;

  imageCharacters: Character[];

  constructor(private http: HttpClient) {
    this.characters = this.characterSubject.asObservable(); 
 
    this.http.get<Character[]>(URL).subscribe( data => {
      this.characterSubject.next(data);
    })
  }

  changeCharacters (character) {
    // Permet de push dans une image de characters
    // imageCharacters.push(character)
    // this.characterSubject.next(imageCharacter)
  }

}
