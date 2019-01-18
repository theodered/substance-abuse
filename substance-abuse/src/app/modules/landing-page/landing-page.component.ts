import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { config } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  naviationConfig = [
    { name: 'Education', link: 'education' },
    { name: 'Stories One', link: 'stories-one' },
    { name: 'Stories Two', link: 'stories-two' },
    { name: 'Therapist', link: 'therapist' },
    { name: 'Team', link: 'team' },
    { name: 'About Us', link: 'aboutUs' },
    { name: 'Rehab Center', link: 'rehabCenter' },
    { name: 'Contact Us', link: 'contactUs' }

  ];
  constructor(private router: Router) {
  }

  navigateTo(config: any) {
    this.router.navigate(['/' + config.link])
  }
  ngOnInit() {
  }

}
