import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StoreDetailPage } from './store-detail';

@NgModule({
  declarations: [
    StoreDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(StoreDetailPage),
  ],
})
export class StoreDetailPageModule {}
