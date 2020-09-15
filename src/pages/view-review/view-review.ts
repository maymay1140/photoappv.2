import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-view-review',
  templateUrl: 'view-review.html',
})
export class ViewReviewPage {
  rowData=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private storage: Storage) {
    this.LoadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewReviewPage');
  }

  LoadData(){
    this.storage.get('id').then((val) => {

      let url = "http://localhost:82/servicewa/get_review.php?id_photo="+val;

      this.http.get(url).subscribe((data: any) => {
        this.rowData = data.rowData;
  
         console.log(data);
        
      }, (error) => { console.log(error) });
    })
  }

  HomeMenu(){
    this.navCtrl.push(HomePage);
  }

}//end
