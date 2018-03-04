import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, public alerCtrl: AlertController) {
  }

  doAlert(){
  let alert = this.alerCtrl.create({
    title: 'Welcome!',
    message : 'You Are Logged In ',
    buttons : ['OK']
  });
alert.present()
  }

  doAlert1(){
    let alert = this.alerCtrl.create({
      title: 'Not Logged In',
      message : 'Wrong Password Or Email Please Check Again. ',
      buttons: ['OK']
    });
  alert.present()
    }

  async login(user : User) {
     try{
       const result = await this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(user.email, user.password);
       console.log(result);
       if(result){
         this.doAlert();
       }
     }
     catch (e){
       console.error(e);
       this.doAlert1();     }
   }

register() {
this.navCtrl.push('RegisterPage'); 
}

}
