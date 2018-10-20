import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Profile',
      url: '/home',
      icon: 'ios-person'
    },
    {
      title: 'Health Issues',
      url: '/home',
      icon: 'ios-heart'
    },
    {
      title: 'Environmental Issues',
      url: '/home',
      icon: 'ios-cloud'
    },
    {
      title: 'Natural disaster Issues',
      url: '/home',
      icon: 'ios-bonfire'
    },
    {
      title: 'Other Issues',
      url: '/list',
      icon: 'ios-flame'
    },
    {
      title: 'Settings',
      url: '/list',
      icon: 'ios-settings'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
