import { Component, OnInit } from '@angular/core';

import { FavoriteService } from './favorite.service';

import { Character } from '../character/character';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  favorites: Character[];

  constructor(private fav: FavoriteService) {
    this.favorites = [];
  }

  ngOnInit() {
    this.fav.favorites.subscribe( (c: Character[]) => {
      this.favorites = c;
    })
  }

}
