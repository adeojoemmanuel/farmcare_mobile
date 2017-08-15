import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddpagePage } from './addpage';

@NgModule({
  declarations: [
    AddpagePage,
  ],
  imports: [
    IonicPageModule.forChild(AddpagePage),
  ],
  exports: [
    AddpagePage
  ]
})
export class AddpagePageModule {}
