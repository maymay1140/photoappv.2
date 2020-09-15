import { SearchWorkPage } from './../search-work/search-work';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuContactPage } from '../menu-contact/menu-contact';
import { ReviewPhotoPage } from '../review-photo/review-photo';

/**
 * Generated class for the MenuUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu-user',
  templateUrl: 'menu-user.html',
})
export class MenuUserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuUserPage');
  }

  searchPage(){
    this.navCtrl.push(SearchWorkPage);
  }
  MenuContact(){
    this.navCtrl.push(MenuContactPage);
  }
  ReviewPhoto(){
    this.navCtrl.push(ReviewPhotoPage);
  }

}//end class
