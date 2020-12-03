import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor(private auth: AuthenticationService) {}

  ngOnInit(): void {
    this.auth.user.subscribe({
      next: (result) => (this.user = result),
    });
  }
}
