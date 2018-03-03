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
import { RegisterPage } from '../pages/register/register' ;

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
    IonicModule.forRoot(MyApp),

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
