import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public activeroute:ActivatedRoute, public MoviesService: MoviesService) { }

  ngOnInit() {
  }

  login(): void {
    
  }


  logout(): void {
    this.MoviesService.logoutUser();
    console.log('User logged out')
  }
}
