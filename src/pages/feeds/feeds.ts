import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-feeds',
  templateUrl: 'feeds.html',
})
export class FeedsPage {

	posts:any = [
		{
			by: 'Aize Obayan',
			location: "Landmark university, Omu-Aran, Nigeria",
			views: 29,
			description: "Amazing Landmarks University Farms ",
			comment: {
				by: 	"Ayeni-Lucas-Vincent",
				body: 	"Wow!!! This is Awesome!!! "
		}},
		{
			by: 'Aize Obayan',
			location: "Landmark university, Omu-Aran, Nigeria",
			views: 330,
			description: "Internet of Things (IOT) A way forward for agro-revolution .",
			comment: {
				by: "Adeojo Emmanuel",
				body: "I love IOT. i leave to code for tansformation."
			}
		}
	];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedsPage');
  }

}
