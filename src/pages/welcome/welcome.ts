import { HomePage } from './../home/home';
import { RegisterPage } from './../register/register';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InfoPage } from '../info/info';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { MenuUserPage } from '../menu-user/menu-user';




@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  username: string;
  password: string;
  loginResult: string;
  data: Observable<any>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  login(username,password){
    
    // let url = 'http://192.168.1.56/servicewa/getmember.php?username=' + username + '&password=' + password;
    let url = 'http://localhost:82/servicewa/getmember.php?username=' + username + '&password=' + password;

   
    this.data = this.http.get(url, username);
    this.data = this.http.get(url, password);

    this.data.subscribe(data => {

      this.storage.set('id', data.id);
      this.storage.get('id').then((val) => {
      console.log(val);
      })


      console.log(data.id);
      if(data.id == null){
        alert("ไม่มี Username นี้ในระบบ");

      }else if(data.type == '1'){
        alert("ยินดีต้อนรับเข้าสู่ระบบช่างภาพ");
        this.navCtrl.push(HomePage);

      }else if(data.type == '2'){
        alert("ยินดีต้อนรับเข้าสู่แอพค้นหาช่างภาพ");
        this.navCtrl.push(MenuUserPage);

      }else{
        
        this.loginResult = "Faild";
      }
    });
  }

  register(){
    this.navCtrl.push(RegisterPage)
  }

  info(){
    this.navCtrl.push(InfoPage)
  }
 

}//end class
