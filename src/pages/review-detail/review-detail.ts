import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ReviewPhotoPage } from '../review-photo/review-photo';



@IonicPage()
@Component({
  selector: 'page-review-detail',
  templateUrl: 'review-detail.html',
})
export class ReviewDetailPage {

item = {overview:''};



  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient, private storage: Storage) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewDetailPage');
    this.item = this.navParams.data;
    console.log(this.item);
  }

  reviewsSave(point,description,item){

    this.storage.get('id').then((val) => {
    console.log("user_id is", val);
    let jsonData = { point: point, description: description, user_id: val, id_photo:item.id_photo }; //สร้าง obj
    console.log(jsonData);
    let url = 'http://localhost:82/servicewa/review_detail.php'; //ให้ไป post ที่  url
    this.http.post(url, jsonData,).subscribe((data: any) => {

      alert("รีวิวเรียบร้อย");
       this.navCtrl.push(ReviewPhotoPage)
      // console.log(data);
    });
  
    //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj 
    //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
  })

}



}//end
