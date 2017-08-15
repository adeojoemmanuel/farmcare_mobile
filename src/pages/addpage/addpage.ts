import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FarmproviderProvider } from '../../providers/farmprovider';

/**
 * Generated class for the AddpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-addpage',
  templateUrl: 'addpage.html',
})
export class AddpagePage {
	
  farm: { fn: string, fl: string, cn: string, mh: string, des: string } = {
    fn: '',
    fl: '',
    cn: '',
    mh: '',
    des: ''
  };

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams, 
  			  public farmproviderProvider: FarmproviderProvider,
    		  public toastCtrl: ToastController) {
  }

  addfarm(){
  	this.farmproviderProvider.createfarm(this.farm).subscribe((resp) => {
  		console.log("farm added");
    }, (err) => {

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: "error adding farm",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}
