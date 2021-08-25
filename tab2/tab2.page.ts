import { Component } from '@angular/core';
import { CloudService } from '../services/cloud.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  allRecord: any;

  constructor(private cloudService: CloudService) {}

  ionViewWillEnter() {
    this.getAllRecords();
  }

  getAllRecords() {
    this.allRecord = [];
    this.cloudService.getVocabData().then((data: any) => {
      if(data.length == 0) {
        console.log('No data found!');
      }else{
        this.allRecord = data;
        console.log('Tab2#', this.allRecord);
      }
    });
  }

}
