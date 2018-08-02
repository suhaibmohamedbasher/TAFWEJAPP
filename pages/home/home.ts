import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WatchPage } from '../watch/watch';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true; 
  //tabBarElement: any;
  constructor(public navCtrl: NavController) {
  //  this.tabBarElement = document.querySelector('.tabbar');
  }

  watchNavigate(){
   this.navCtrl.push(WatchPage,{


   })



  }


  
  ionViewDidLoad(){
    //this.tabBarElement.style.display = 'none';
    setTimeout(() =>{
      this.splash=false;
      this.watchNavigate();
     // this.tabBarElement.style.display = 'flex';
    },4000);


  }
}
