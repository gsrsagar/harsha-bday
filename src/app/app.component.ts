import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform:Platform, private router:Router) {
    this.platform.backButton.subscribeWithPriority(-1 ,()=>{
      const url = this.router.url;
      // if(url=='tabs/tab/tab1'){
      //   this.router.navigate(['']);
      // }
    //  else {
        App.exitApp();
     // }
    })
  }
}
