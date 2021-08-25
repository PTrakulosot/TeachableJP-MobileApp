import { AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private router: Router, private alertctrl: AlertController) {}

  gotoPage(page: number) {
    if (page == 1) {
      this.router.navigate(['/hiragana']);
    } else if (page == 2) {
      this.router.navigate(['/katakana']);
    } else if (page == 3) {
      this.router.navigate(['/firstlesson']);
    } else if (page == 4) {
      this.router.navigate(['/secondlesson']);
    }
  }
  async alertInfo() {
    const alert = await this.alertctrl.create({
      header: 'Member',
      message:
        'ชื่อ: นาย พรชัย ตระกูลโอสถ <br/> รหัส: 6121600250' +
        '</br>ชื่อ: นางสาว กัลยรัตน์ ผลจันทร์ <br/> รหัส: 6121603917',
      buttons: ['OK'],
    });
    await alert.present();
  }
}
