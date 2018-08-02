import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BioSelectPage } from './bio-select';

@NgModule({
  declarations: [
    BioSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(BioSelectPage),
  ],
})
export class BioSelectPageModule {}


