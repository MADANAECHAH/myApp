import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IcentrePage } from './icentre';

@NgModule({
  declarations: [
    IcentrePage,
  ],
  imports: [
    IonicPageModule.forChild(IcentrePage),
  ],
})
export class IcentrePageModule {}
