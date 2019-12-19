import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase';


import { from } from 'rxjs';
import { StoreDetailPage } from '../store-detail/store-detail';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  burgers: any = [];
  slides = [
    {
      title: "Restaurants",      
      image: "assets/imgs/banana.png",
    },
    {
      title: "Party",      
      image: "assets/imgs/restaurants.png",
    },
    {
      title: "Supermarket",      
      image: "assets/imgs/restaurants.png",
    }
  ];
  stores = [
    {
      image:"assets/imgs/kfc.png",
      title:"KFC - Buruburu",
      food:"Chicken",      
    },
    {
      image:"assets/imgs/kfc.png",
      title:"Serian Super Salad Food",
      food:"Salad . Kenyan",
    },
    {
      image:"assets/imgs/kfc.png",
      title:"Chicken Inn - Buruburu",
      food:"Chicken",
    },
    {
      image:"assets/imgs/kfc.png",
      title:"Tomi's Kitchen Nairobi",
      food:"Nigerian . Kenyan",
    }
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebaseProvider: FirebaseProvider,
  ) {
    // this.getBurgers();
  }

  // getBurgers() {
  //   this.firebaseProvider.getBurgers()
  //     .then((r) => {
  //       this.burgers = r;
  //       console.log(this.burgers)
  //     })
  storeDetail()
  {
    this.navCtrl.push(StoreDetailPage);

  }

}
