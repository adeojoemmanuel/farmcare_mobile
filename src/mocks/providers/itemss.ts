import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Itemss {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "banana",
        "profilePic": "assets/img/speakers/banana.jpg",
        "about": "banana landmark university farm."
      },
      {
        "name": "broiler",
        "profilePic": "assets/img/speakers/chicken.jpg",
        "about": "broiler ready for sale."
      },
      {
        "name": "cat fish",
        "profilePic": "assets/img/speakers/catfish.jpg",
        "about": "cat fish ladmark university farm."
      },
      {
        "name": "water melon",
        "profilePic": "assets/img/speakers/melon.jpg",
        "about": "water melon, lu farms."
      },
      {
        "name": "pawpaw",
        "profilePic": "assets/img/speakers/pawpaw.jpg",
        "about": "pawpaw for sale."
      },
      {
        "name": "pineapple lu farms",
        "profilePic": "assets/img/speakers/paple.jpg",
        "about": "pineapple."
      },
      {
        "name": "orange",
        "profilePic": "assets/img/speakers/imgorange.jpg",
        "about": "orange for sale."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
