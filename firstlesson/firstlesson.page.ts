import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstlesson',
  templateUrl: './firstlesson.page.html',
  styleUrls: ['./firstlesson.page.scss'],
})
export class FirstlessonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  playAudio(file:any) {
    let audio = new Audio();
    audio.src = "../assets/firstlesson_audio/"+file+".wav";
    console.log(audio.src);
    audio.load();
    audio.play();
  }

}
