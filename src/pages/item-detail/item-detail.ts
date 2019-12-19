import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
  
  options:any=[
    {
      title:"Would you like your meal zinger or original?",
      items:[
        {
          name:"Original(non-spicy)"
        },
        {
          name:"Zinger(spicy)"
        }
      ]
    },
    {
      title:"Make a choice of Your 1.25 ltr Options",
      items:[
        {
          name:"Fanta Blackcurrant"
        },
        {
          name:"Fanta Passion"
        },
        {
          name:"Sprite"
        },
        {
          name:"Coke"
        },
        {
          name:"Fanta Orange"
        }

      ]
    }
  ];
  drinks:any=[
    {
      name:"Fanta Blackcurrant"
    },
    {
      name:"Fanta Passion"
    },
    {
      name:"Sprite"
    },
    {
      name:"Coke"
    },
    {
      name:"Fanta Orange"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
  }
  toggleSection(i){
    this.options[i].open = !this.options[i].open;
  }

}
