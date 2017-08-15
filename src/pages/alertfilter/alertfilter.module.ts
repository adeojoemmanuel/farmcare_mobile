import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertfilterPage } from './alertfilter';

@NgModule({
  declarations: [
    AlertfilterPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertfilterPage),
  ],
  exports: [
    AlertfilterPage
  ]
})
export class AlertfilterPageModule {}
