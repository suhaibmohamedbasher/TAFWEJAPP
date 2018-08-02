import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {BioSelectPage} from '../bio-select/bio-select';

/**
 * Generated class for the WatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watch',
  templateUrl: 'watch.html',
})
export class WatchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  

  bioNavigate(){
    this.navCtrl.push(BioSelectPage,{

    }) 
   }



  ionViewDidLoad() {
    console.log('ionViewDidLoad WatchPage');
  }


}
