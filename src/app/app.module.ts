import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TestingPage } from '../pages/testing/testing';
<<<<<<< HEAD
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBzGz-K-8U3WX9MyE6bTqOYfixiYWXxqTM",
  authDomain: "e-sastera.firebaseapp.com",
  databaseURL: "https://e-sastera.firebaseio.com",
  projectId: "e-sastera",
  storageBucket: "e-sastera.appspot.com",
  messagingSenderId: "673971666655"
};
=======
import { SettingPage } from '../pages/Setting/Setting';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { FIREBASE_CONFIG } from './firebase.credentials';
>>>>>>> 036158d4e771d98cd1eae5e51ff5aa5bb3b93ae6

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TestingPage,
    SettingPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TestingPage,
    SettingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
