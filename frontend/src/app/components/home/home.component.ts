import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'C:/Users/Brad/FantasticFour/frontend/src/app/school.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit() {
  }

  toggleVisibility(e) {// this.marked= e.target.checked;
  }

}
