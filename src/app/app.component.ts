import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Carlinha';

  userData = {
    email: 'will@email.com',
    role: 'Admin',
  }

  title = 'moment';
}
