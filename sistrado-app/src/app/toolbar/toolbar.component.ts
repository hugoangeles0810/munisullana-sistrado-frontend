import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    dniCiudadano='47398154';

    user: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.user=this.authService.getCurrentUser();
    // console.log(this.user);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
