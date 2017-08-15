import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyfarmPage } from './myfarm';

@NgModule({
  declarations: [
    MyfarmPage,
  ],
  imports: [
    IonicPageModule.forChild(MyfarmPage),
  ],
  exports: [
    MyfarmPage
  ]
})
export class MyfarmPageModule {}
