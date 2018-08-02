import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LastPage} from '../last/last';

/**
 * Generated class for the DonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-done',
  templateUrl: 'done.html',
})
export class DonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

  lastNavigate(){
    this.navCtrl.push(LastPage,{

    }) 
   }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DonePage');
  }

}
