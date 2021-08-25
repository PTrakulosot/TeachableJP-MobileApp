import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupmodalPage } from '../popupmodal/popupmodal.page';

@Component({
  selector: 'app-katakana',
  templateUrl: './katakana.page.html',
  styleUrls: ['./katakana.page.scss'],
})
export class KatakanaPage implements OnInit {

  letter : any = '' ;

  constructor(private modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async openPopupModal(letter: any) {
    const modal = await this.modalCtrl.create({
      component: PopupmodalPage,
      componentProps: {
        'letterValue': letter,
        'pageValue': 2
      }
    });
    return await modal.present();
  }

}
