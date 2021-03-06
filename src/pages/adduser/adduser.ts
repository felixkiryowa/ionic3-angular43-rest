
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';
/**
 * Generated class for the AdduserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adduser',
  templateUrl: 'adduser.html',
})
export class AdduserPage {
  person: any;
  user = { 
            name: '', 
            username: '', 
            email: '', 
            phone: '', 
            website: '', 
            address: { 
                        street: '', 
                        suite: '', 
                        city: '', 
                        zipcode: '', 
                        geo: { lat: '', lng: '' } }, 
                        company: { name: '', bs: '', catchPhrase: '' }
            };
  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public rest_provider: RestProvider
      ) {
        this.person = this.navParams.get('person');
        console.log(this.person);
  }

  saveUser() {
    console.log(this.user);
    this.rest_provider.addUser(this.user).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AdduserPage');
  }

}
