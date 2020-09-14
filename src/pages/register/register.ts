import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
            ,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  create(card_id,username,password,type){

      let jsonData = { card_id:card_id, username: username, password: password, type: type }; //สร้าง obj
      // let url = 'http://192.168.1.56/servicewa/register.php'; 
      let url = 'http://localhost:82/servicewa/register.php'; //ให้ไป post ที่  url
      //ให้ไป post ที่  url
      this.http.post(url,jsonData).subscribe((data: any) => {
        // console.log(jsonData);
          if(type==1){
            alert("การสมัครสมาชิกเป็นช่างภาพจะมีค่าบริการ200บาท โปรดโอนเงินและอัพโหลดหลักฐานการชำระเงินด้วยค่ะ");
            this.navCtrl.push(WelcomePage)
            console.log(data);
          }else if(type==2){
            alert("สมัครสมาชิกเรียบร้อยแล้วค่ะ");
            this.navCtrl.push(WelcomePage)
            console.log(data);
          }
        
      });
    
  }

}//end class
