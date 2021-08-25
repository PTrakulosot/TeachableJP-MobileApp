import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-popupmodal',
  templateUrl: './popupmodal.page.html',
  styleUrls: ['./popupmodal.page.scss'],
})
export class PopupmodalPage implements OnInit {

  @Input() letterValue: any;
  @Input() pageValue: any;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  closeModalPage() {
    this.modalCtrl.dismiss();
  }

  playAudio(file:any) {
    let audio = new Audio();
    audio.src = "../assets/letter_audio/"+file+".wav";
    console.log(audio.src);
    audio.load();
    audio.play();
  }

}
