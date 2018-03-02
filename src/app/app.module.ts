import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestingPage } from '../pages/testing/testing';
import { HttpModule } from '@angular/http';
import { SettingPage } from '../pages/Setting/Setting';
import { LoginPage } from '../pages/Login/Login';
<<<<<<< HEAD
import { RegisterPage } from '../pages/Register/Register';

=======
import { RegisterPage } from '../pages/register/register' ;
>>>>>>> 4e9c742c7ebebf92420c902e713fa0028385676e

@NgModule({
  declarations: [
    MyApp,
    LoginPage,  
    HomePage,
    ListPage,
    TestingPage,
    SettingPage,
    RegisterPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ListPage,
    TestingPage,
    SettingPage,
    RegisterPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
