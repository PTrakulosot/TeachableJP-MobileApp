import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CloudService {

  loading: any;

  constructor(private firestore: AngularFirestore, private loadingController: LoadingController) { }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    await this.loading.present();
  }

  stopPresentLoading() {
    this.loading.dismiss();
  }

  async getVocabData() {
    let recs: any = [];
    this.presentLoading();
    await this.firestore.collection('/teachablejapan/').get()
      .toPromise().then(res => {
        res.forEach((doc: any) => {
          recs.push({
            id: doc.id,
            vocab: doc.data().vocab,
            spell: doc.data().spell,
            type: doc.data().type,
            meaning: doc.data().meaning
          });
        });
        this.stopPresentLoading();
      });
      return recs;
  }

  async reloadPage() {
    this.presentLoading();
    await this.delay(200);
    this.stopPresentLoading();
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}

