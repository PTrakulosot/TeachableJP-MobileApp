import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PopupmodalPage } from '../popupmodal/popupmodal.page';

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.page.html',
  styleUrls: ['./hiragana.page.scss'],
})
export class HiraganaPage implements OnInit {

  letter : any = '' ;

  constructor(private modalCtrl : ModalController) {}

  ngOnInit() {
  }

  async openPopupModal(letter: any) {
    const modal = await this.modalCtrl.create({
      component: PopupmodalPage,
      componentProps: {
        'letterValue': letter,
        'pageValue': 1
      }
    });
    return await modal.present();
  }

}
