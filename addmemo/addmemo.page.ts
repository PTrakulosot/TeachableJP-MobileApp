import { Component, OnInit, ViewChild } from '@angular/core';
import { LocalService, Item } from '../services/local.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { templateSourceUrl } from '@angular/compiler';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmemo',
  templateUrl: './addmemo.page.html',
  styleUrls: ['./addmemo.page.scss'],
})
export class AddmemoPage implements OnInit {

  items: Item[] = [];
  
  newItem: Item = <Item>{};
  
  @ViewChild('mylist')mylist: IonList;

  constructor(private storageService: LocalService, private plt: Platform, private toastCtrl: ToastController, 
    private alertCtrl: AlertController, private modalCtrl: ModalController, private router: Router) {
    this.plt.ready().then(() => {
      this.loadItems();
    });
  }

  closeModalPage() {
    this.modalCtrl.dismiss();
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
        this.closeModalPage();
        this.router.navigate(['/tabs/tab1']);
      });
    }
    
  }

  loadItems() {
    this.storageService.getItems().then(items => {
      this.items = items;
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

  ngOnInit() {
  }

}
