import { Component, ViewChild } from '@angular/core';
import { LocalService, Item } from '../services/local.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { templateSourceUrl } from '@angular/compiler';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddmemoPage } from '../addmemo/addmemo.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  items: Item[] = [];
  
  newItem: Item = <Item>{};
  
  @ViewChild('mylist')mylist: IonList;

  constructor(private storageService: LocalService, private plt: Platform, private toastCtrl: ToastController, 
    private alertCtrl: AlertController, private modalCtrl: ModalController, private router: Router) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
  
  addItem() {
    this.newItem.id = Date.now();
    if(!Boolean(this.newItem.vocab) || !Boolean(this.newItem.spell) || !Boolean(this.newItem.type) || !Boolean(this.newItem.meaning))
    {
      this.emptyAlert();
    } else {
      this.storageService.addItem(this.newItem).then(item => {
        this.newItem = <Item>{};
        this.showToast('Item added!');
        this.loadItems();
      });
    }
    
  }

  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  deleteItem(item: Item) {
    this.storageService.deleteItem(item.id).then(item => {
      this.showToast('Item removed!');
      // this.mylist.closeSlidingItems();
      this.loadItems();
    });
  }

  async showToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async emptyAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Warning',
      message: 'Can not be <strong>\'empty\'</strong> any input.',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: (cancel) => {
            console.log("Can not be 'empty' in any fill");
          }
        }
      ]
    });
    await alert.present();
  }

  async openAddMemo() {
    const modal = await this.modalCtrl.create({
      component: AddmemoPage,
      componentProps: {

      }
    });
    return await modal.present();
  }

  ionViewWillEnter() {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }
}
