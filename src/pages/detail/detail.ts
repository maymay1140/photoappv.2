import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewGallPage } from '../review-gall/review-gall';
import { ContactWorkPage } from '../contact-work/contact-work';



@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

rowsDetail=[];
item = {overview:''};

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.item = this.navParams.data;
    console.log(this.item);
  }



  loadDetail(item) {
    let url = 'http://localhost:82/servicewa/get_detail.php?_id_album='+item.id_ab;
    this.http.get(url).subscribe((data: any) => {
      this.rowsDetail = data.rowsDetail;
      console.log(url);
      console.log(data);
    }, (error) => { console.log(error) });
  } 


  Contact_work(item){
    this.navCtrl.push(ContactWorkPage,item)
    // console.log(item.id);

  }
  
 



}// end class
