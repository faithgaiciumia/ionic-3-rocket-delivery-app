import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ItemDetailPage } from '../item-detail/item-detail';

/**
 * Generated class for the StoreDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-detail',
  templateUrl: 'store-detail.html',
})
export class StoreDetailPage {
  meal_type:string ="streetwise";
  festives:any=[
    {
      image:"assets/imgs/kfc.png",
      title:"KFC 3-IN-1 Bucket",
      description:"5 pieces of chicken, large chips, nuggets and 1.25L of soda",
      price:"1350 Ksh",
    },
    {
      image:"https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title:"Bawa Bucket",
      description:"16 wings, Family chips and a 1.25L drink",
      price:"1600 Ksh",
    },
    {
      image:"https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title:"Streetwise 7",
      description:"7 pieces of chicken, 1 family chips, 1.25L soda",
      price:"1500 Ksh",
    },
  ];
  streetwise:any=[
    {
      image:"https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title:"Streetwise 2",
      description:"2 pieces of chicken with regular chips",
      price:"350 Ksh",
    },
    {
      image:"https://images.pexels.com/photos/2741461/pexels-photo-2741461.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title:"Bawa Bucket",
      description:"16 wings, Family chips and a 1.25L drink",
      price:"1600 Ksh",
    },
    {
      image:"https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title:"Streetwise 7",
      description:"7 pieces of chicken, 1 family chips, 1.25L soda",
      price:"1500 Ksh",
    },
  ];
  sharing:any=[
    {
      image:"https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title:"Kentucky Bucket",
      description:"11 Chicken Pieces (Original or Zinger) + Family Chips",
      price:"1950 Ksh",
    },
    {
      image:"https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      title:"Bawa Bucket",
      description:"16 wings, Family chips and a 1.25L drink",
      price:"1600 Ksh",
    },
    {
      image:"https://images.pexels.com/photos/2454533/pexels-photo-2454533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title:"Streetwise 7",
      description:"7 pieces of chicken, 1 family chips, 1.25L soda",
      price:"1500 Ksh",
    },
  ];


  constructor(public navCtrl: NavController, public modalCtrl:ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreDetailPage');
  }
  itemDescription(item){
    console.log(item);
    let modal= this.modalCtrl.create(ItemDetailPage);
    modal.present();
    //this.navCtrl.push(ItemDetailPage);
    //image
    //title
    //price
    //description
    //options
  }

}
