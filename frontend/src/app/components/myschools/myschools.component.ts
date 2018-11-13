import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'C:/Users/Brad/FantasticFour/frontend/src/app/school.service';
import {Router} from '@angular/router';
import {School} from '../../school.model';

@Component({
  selector: 'app-myschools',
  templateUrl: './myschools.component.html',
  styleUrls: ['./myschools.component.css']
})
export class MyschoolsComponent implements OnInit {

  school: School[];

  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit() {
    this.getSchool();
  }

  getSchool() {
    return this.schoolService.getSchool()
      .subscribe(
        school => {
          console.log(school);
           this.school=  school;
        }
      );
}}
