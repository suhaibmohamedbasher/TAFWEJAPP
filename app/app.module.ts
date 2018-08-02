import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WatchPage } from '../pages/watch/watch';
import { BioSelectPage } from '../pages/bio-select/bio-select';
import {DonePage} from '../pages/done/done';
import {FaildPage} from '../pages/faild/faild';
import {LastPage} from '../pages/last/last';
import {InfoPage} from '../pages/info/info';





@NgModule({
  declarations: [
    MyApp,
    DonePage,
    HomePage,
    WatchPage,
    BioSelectPage,
    FaildPage,
    LastPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DonePage,
    HomePage,
    WatchPage,
    BioSelectPage,
    FaildPage,
    LastPage,
    InfoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
