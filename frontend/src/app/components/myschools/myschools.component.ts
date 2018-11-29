import {Component, OnInit} from '@angular/core';
import {SchoolService} from 'C:/Users/Brad/FantasticFour/frontend/src/app/school.service';
import {ActivatedRoute, Router} from '@angular/router';
import {School} from '../../school.model';

@Component({
  selector: 'app-myschools',
  templateUrl: './myschools.component.html',
  styleUrls: ['./myschools.component.css']
})
export class MyschoolsComponent implements OnInit {

  schools: School[];

  constructor(private schoolService: SchoolService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(localStorage.getItem('userGpaValue'));
    this.fetchSchool();
  }

  fetchSchool() {
    this.schoolService
      .getSchool()
      .subscribe((data: School[]) => {
        let schoolNames = '';
        let counter = 0;
        data.forEach((sc) => {
          schoolNames = schoolNames + (counter > 0 ? ', ' : '') + sc.name;
          counter = counter + 1;
        });

        // @ts-ignore
        this.school = schoolNames;
      });
  }
}
