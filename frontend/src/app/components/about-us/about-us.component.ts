import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'C:/Users/Brad/FantasticFour/frontend/src/app/school.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit() {
  }

}
