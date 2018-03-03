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
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from "angularfire2/auth";
import { RegisterPageModule } from '../pages/register/register.module';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,  
    HomePage,
    ListPage,
    TestingPage,
    SettingPage
   

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    RegisterPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage,
    LoginPage,
    HomePage,
    ListPage,
    TestingPage,
    SettingPage
    
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
