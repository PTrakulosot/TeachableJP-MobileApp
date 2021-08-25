import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'hiragana',
    loadChildren: () => import('./hiragana/hiragana.module').then( m => m.HiraganaPageModule)
  },
  {
    path: 'katakana',
    loadChildren: () => import('./katakana/katakana.module').then( m => m.KatakanaPageModule)
  },
  {
    path: 'firstlesson',
    loadChildren: () => import('./firstlesson/firstlesson.module').then( m => m.FirstlessonPageModule)
  },
  {
    path: 'secondlesson',
    loadChildren: () => import('./secondlesson/secondlesson.module').then( m => m.SecondlessonPageModule)
  },
  {
    path: 'popupmodal',
    loadChildren: () => import('./popupmodal/popupmodal.module').then( m => m.PopupmodalPageModule)
  },
  {
    path: 'addmemo',
    loadChildren: () => import('./addmemo/addmemo.module').then( m => m.AddmemoPageModule)
  },
  {
    path: 'youtube',
    loadChildren: () => import('./youtube/youtube.module').then( m => m.YoutubePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
