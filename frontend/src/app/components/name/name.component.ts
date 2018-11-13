import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'C:/Users/Brad/FantasticFour/frontend/src/app/school.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {

  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit() {
  }

}
