import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivitylistPage } from './activitylist';

@NgModule({
  declarations: [
    ActivitylistPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivitylistPage),
  ],
})
export class ActivitylistPageModule {}