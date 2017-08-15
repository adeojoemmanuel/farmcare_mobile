import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertdetailPage } from './alertdetail';

@NgModule({
  declarations: [
    AlertdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertdetailPage),
  ],
  exports: [
    AlertdetailPage
  ]
})
export class AlertdetailPageModule {}
