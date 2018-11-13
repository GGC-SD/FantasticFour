import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'C:/Users/Brad/FantasticFour/frontend/src/app/school.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit() {
  }

}
