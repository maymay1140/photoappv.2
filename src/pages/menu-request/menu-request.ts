import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-menu-request',
  templateUrl: 'menu-request.html',
})
export class MenuRequestPage {

  rowData=[];
  rowAccept=[];



  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient,private storage: Storage) {
    this.LoadData();
    this.LoadAccept();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuRequestPage');
  }

  LoadData(){
    this.storage.get('id').then((val) => {

      let url = "http://localhost:82/servicewa/get_work_request.php?id_photo="+val;

      this.http.get(url).subscribe((data: any) => {
        this.rowData = data.rowData;
  
         console.log(data);
        
      }, (error) => { console.log(error) });
    })
  }

  LoadAccept(){
    this.storage.get('id').then((val) => {

      let url = "http://localhost:82/servicewa/get_accept.php?id_photo="+val;

      this.http.get(url).subscribe((data: any) => {
        this.rowAccept = data.rowAccept;
  
         console.log(data);
        
      }, (error) => { console.log(error) });
    })
  }

  Complete(accept){
    let jsonData = { status:3 }; //สร้าง obj
    let url = 'http://localhost:82/servicewa/complete_work.php?id='+accept.id; //ให้ไป post ที่  url
    this.http.post(url,jsonData).subscribe((data: any) => {
          alert("อนุมัติเรียบร้อย");
          this.navCtrl.push(MenuRequestPage)
          console.log(data);
    });
  }
  Accept(item){
    let jsonData = { status:1 }; //สร้าง obj
      let url = 'http://localhost:82/servicewa/accept_work.php?id='+item.id; //ให้ไป post ที่  url
      this.http.post(url,jsonData).subscribe((data: any) => {
            alert("อนุมัติเรียบร้อย");
            this.navCtrl.push(MenuRequestPage)
            console.log(data);
      });
  }

  No(item){
    let jsonData = { status:2 }; //สร้าง obj
      let url = 'http://localhost:82/servicewa/No_work.php?id='+item.id; //ให้ไป post ที่  url
      this.http.post(url,jsonData).subscribe((data: any) => {
            alert("ปฏิเสธิเรียบร้อย");
            this.navCtrl.push(MenuRequestPage)
            console.log(data);
      });
  }

  HomeMenu(){
    this.navCtrl.push(HomePage);
  }
}//end
