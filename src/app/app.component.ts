import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'vault-5-unlock-throw';

  constructor() { }

  async ngOnInit() {
    timer(2000).subscribe(() => {
      SplashScreen.hide()
    })
  }
}
