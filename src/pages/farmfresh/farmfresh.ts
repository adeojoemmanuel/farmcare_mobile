import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { ItemDetailPage } from '../item-detail/item-detail';
import { ChatPage } from '../chat/chat';

import { Items } from '../../providers/providers';

import { Itemss } from '../../providers/providers';

import { Item } from '../../models/item';

@Component({
  selector: 'page-farmfresh',
  templateUrl: 'farmfresh.html',
})
export class FarmfreshPage {

  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public itemss: Itemss, public modalCtrl: ModalController) {
    this.currentItems = this.itemss.query();
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  buy(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  openchat(){
      this.navCtrl.push(ChatPage);
  }

}
