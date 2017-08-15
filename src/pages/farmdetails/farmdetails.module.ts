import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarmdetailsPage } from './farmdetails';

@NgModule({
  declarations: [
    FarmdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FarmdetailsPage),
  ],
  exports: [
    FarmdetailsPage
  ]
})
export class FarmdetailsPageModule {}
