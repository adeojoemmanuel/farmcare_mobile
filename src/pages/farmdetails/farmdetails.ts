import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyfarmproviderProvider } from '../../providers/myfarmprovider';

/**
 * Generated class for the FarmdetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'session/:sessionId'
})
@Component({
  selector: 'page-farmdetails',
  templateUrl: 'farmdetails.html',
})
export class FarmdetailsPage {

  session: any;

  constructor(
    public dataProvider: MyfarmproviderProvider,
    public navParams: NavParams
  ) {}

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      if (
        data &&
        data.schedule &&
        data.schedule[0] &&
        data.schedule[0].groups
      ) {
        for (const group of data.schedule[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === this.navParams.data.sessionId) {
                this.session = session;
                break;
              }
            }
          }
        }
      }
    });
  }
}
