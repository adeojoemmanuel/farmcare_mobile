import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
        "name": "Adeojo emmanuel",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "backend developer."
      },
      {
        "name": "Adegoke david",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "js developer."
      },
      {
        "name": "Mr asani",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "mr asani."
      },
      {
        "name": "Tosin bot",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "laravel"
      },
      {
        "name": "yemo gabriel",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "js."
      },
      {
        "name": "Luke precious",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "php."
      },
      {
        "name": "bright igbo",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "ui developer"
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
