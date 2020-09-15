import { WelcomePage } from './../pages/welcome/welcome';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RegisterPage } from '../pages/register/register';
import { InfoPage } from '../pages/info/info';
import { AboutPage } from '../pages/about/about';
import { EditaboutPage } from '../pages/editabout/editabout';
import { MenuUserPage } from '../pages/menu-user/menu-user';
import { SearchWorkPage } from '../pages/search-work/search-work';
import { DetailPage } from '../pages/detail/detail';
import { ReviewGallPage } from '../pages/review-gall/review-gall';
import { ContactWorkPage } from '../pages/contact-work/contact-work';
import { MenuContactPage } from '../pages/menu-contact/menu-contact';
import { MenuRequestPage } from '../pages/menu-request/menu-request';
import { ReviewPhotoPage } from '../pages/review-photo/review-photo';
import { ReviewDetailPage } from '../pages/review-detail/review-detail';
import { ViewReviewPage } from '../pages/view-review/view-review';
import { ReportWorkPage } from '../pages/report-work/report-work';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    InfoPage,
    AboutPage,
    EditaboutPage,
    MenuUserPage,
    SearchWorkPage,
    DetailPage,
    ReviewGallPage,
    ContactWorkPage,
    MenuContactPage,
    MenuRequestPage,
    ReviewPhotoPage,
    ReviewDetailPage,
    ViewReviewPage,
    ReportWorkPage,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    WelcomePage,
    RegisterPage,
    InfoPage,
    AboutPage,
    EditaboutPage,
    MenuUserPage,
    SearchWorkPage,
    DetailPage,
    ReviewGallPage,
    ContactWorkPage,
    MenuContactPage,
    MenuRequestPage,
    ReviewPhotoPage,
    ReviewDetailPage,
    ViewReviewPage,
    ReportWorkPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
