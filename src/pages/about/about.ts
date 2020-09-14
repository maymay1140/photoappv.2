import { EditaboutPage } from './../editabout/editabout';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  rowsUser=[];

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public http:HttpClient,private storage: Storage) {
      this.loadusers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  loadusers(){
    this.storage.get('id').then((val) => {
      // console.log(val);
      // let url = "http://192.168.1.56/servicewa/users.php?id="+val;
      let url = "http://localhost:82/servicewa/users.php?id="+val;
      

      this.http.get(url).subscribe((data: any) => {
        this.rowsUser = data.users;
  
         console.log(data);
        
      }, (error) => { console.log(error) });
    })
  }

  edit(){
    this.navCtrl.push(EditaboutPage)

  }

}//end class
