import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { SearchWorkPage } from '../search-work/search-work';




@IonicPage()
@Component({
  selector: 'page-contact-work',
  templateUrl: 'contact-work.html',
})
export class ContactWorkPage {

item = {overview:''};


  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient, private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactWorkPage');
    this.item = this.navParams.data;
    console.log(this.item);
  }

  add_work(date,location,phone,item){

      this.storage.get('id').then((val) => {
      console.log("user_id is", val);
      let jsonData = { date: date, location: location,phone:phone, user_id: val, id_photo:item.id }; //สร้าง obj
      console.log(jsonData);
      let url = 'http://localhost:82/servicewa/request_work.php'; //ให้ไป post ที่  url
      this.http.post(url, jsonData,).subscribe((data: any) => {

        alert("ส่งคำขอไปเรียบร้อยแล้ว รอการติดต่อกลับจากช่างภาพ");
         this.navCtrl.push(SearchWorkPage)
        // console.log(data);
      });
    
      //method post รับค่ามา 2 ค่า คือ url เว็บที่ต้องการโพสไป , obj 
      //subscribe ใส่  arrow  function ใส่ค่าเป็น data : any ข้อมูลอะไรก็ได้
    })

  }

}//end class
