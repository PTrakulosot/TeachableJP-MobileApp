import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondlesson',
  templateUrl: './secondlesson.page.html',
  styleUrls: ['./secondlesson.page.scss'],
})
export class SecondlessonPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  playAudio(file:any) {
    let audio = new Audio();
    audio.src = "../assets/secondlesson_audio/"+file+".wav";
    console.log(audio.src);
    audio.load();
    audio.play();
  }

}
