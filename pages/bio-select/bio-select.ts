import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DonePage } from '../done/done';


/**
 * Generated class for the BioSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bio-select',
  templateUrl: 'bio-select.html',
})
export class BioSelectPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  
  donenavigate(){
    this.navCtrl.push(DonePage,{

    }) 
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad BioSelectPage');
  }

}
