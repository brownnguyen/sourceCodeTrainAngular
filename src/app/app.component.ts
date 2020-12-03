import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './core/services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-demo';

  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.auth.initUser();
  }
}
