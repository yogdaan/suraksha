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
      url: '/profile',
      icon: 'ios-person'
    },
    {
      title: 'Health Issues',
      url: '/explore',
      icon: 'ios-heart'
    },
    {
      title: 'Environmental Issues',
      url: '/environmental',
      icon: 'ios-cloud'
    },
    {
      title: 'Natural disaster Issues',
      url: '/explore',
      icon: 'ios-bonfire'
    },
    {
      title: 'Other Issues',
      url: '/explore',
      icon: 'ios-flame'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'ios-settings'
    },
    {
      title: 'Help & Feedback',
      url: '/help',
      icon: 'ios-help-buoy'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'ios-star'
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
