
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from '@ionic/angular';


export interface Item {
  id: number,
  vocab: string,
  spell: string,
  type: string,
  meaning: string,
}

const ITEMS_KEY = 'memo-vocab';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  loading: any;

  constructor(private storage: Storage, private loadingController: LoadingController) { }

  //create
  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if(items){
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      }else{
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  //read
  getItems(): Promise<Item[]> {
    return this.storage.get(ITEMS_KEY);
  }

  //delete
  deleteItem(id: number): Promise<Item> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if(!items || items.length === 0) {
        return null;
      }

      let toKeep: Item[] = [];

      for (let i of items) {
        if(i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}
