import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FarmfreshPage } from './farmfresh';

@NgModule({
  declarations: [
    FarmfreshPage,
  ],
  imports: [
    IonicPageModule.forChild(FarmfreshPage),
  ],
  exports: [
    FarmfreshPage
  ]
})
export class FarmfreshPageModule {}
