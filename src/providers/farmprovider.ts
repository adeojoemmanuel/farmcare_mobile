import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Api } from './api';

/*
  Generated class for the FarmproviderProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FarmproviderProvider {
    _user: any = true;

  constructor(public http: Http,
  			  public api: Api) {
    console.log('Hello FarmproviderProvider Provider');
  }

  createfarm(farmdetails: any){
  	 let seq = this.api.post('api', farmdetails).share();

  	  seq
      .map(res => res.json())
      .subscribe(res => {
        // If the API returned a successful response, mark the user as logged in
        if (res.status == 'success') {
          /*this._loggedIn(res);*/
          this._loggedIn(true);
        } else {
          this._loggedIn(true); // remove this line later
        }
      }, err => {
        console.error('ERROR', err);
      });
      return seq;
  }

  _loggedIn(resp) {
    this._user = resp.user;
  }

}
