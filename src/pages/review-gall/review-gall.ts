import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


/**
 * Generated class for the ReviewGallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-review-gall',
  templateUrl: 'review-gall.html',
})
export class ReviewGallPage {

  rowsDetail=[];
  mcontact :any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
    this.loadDetail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewGallPage');
    this.mcontact = this.navParams.data;
    console.log(this.mcontact);
  }

   loadDetail() {
    let url = 'http://localhost:82/servicewa/get_detail.php?id='+this.mcontact.id;
    this.http.get(url).subscribe((data: any) => {
      this.rowsDetail = data.rowsDetail;
      console.log(this.rowsDetail);
      console.log(data);
    }, (error) => { console.log(error) });
  } 


}//end class
