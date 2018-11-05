import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RestProvider } from './../../providers/rest/rest';
import { AdduserPage } from './../adduser/adduser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any;
  person:any = {
    'email':'franciskiryowa68@gmail.com',
    'name':'felix'
  };
  loading = false;

  constructor(
    public navCtrl: NavController,
    private loader: LoadingController,
    private rest_provider: RestProvider
    ) {
      this.getUsers();
  }
  getUsers() {
    this.presentLoadingDefault();
    this.rest_provider.getUsers()
    .then(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  goToAddUsers() {
    this.loading = true;
    let loader = this.loader.create({
      // spinner: 'crescent',
      // spinner: 'bubbles',
      spinner: 'bubbles',
      content: 'Please wait...'
    });
    loader.present();
    this.navCtrl.push(AdduserPage,{'person':this.person});
    loader.dismiss();
  }
  presentLoadingDefault() {
    let loading = this.loader.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

}
