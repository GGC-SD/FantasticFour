import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../school.service';
import { Router } from '@angular/router';
import { School } from '../../school.model';

@Component({
  selector: 'app-allschools',
  templateUrl: './allschools.component.html',
  styleUrls: ['./allschools.component.css']
})
export class AllschoolsComponent implements OnInit {

  school: School[];


  constructor(private schoolService: SchoolService, private router: Router) { }

  ngOnInit() {this.fetchSchool();
  }

  fetchSchool() {
    this.schoolService
    .getSchool()
    .subscribe((data: School[]) => {
      // @ts-ignore
      this.school = (JSON.stringify(data));
      console.log('Data requested ... ');
      console.log(this.school);
    });
  }

}
