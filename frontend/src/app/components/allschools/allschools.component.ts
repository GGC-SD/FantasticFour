import {Component, OnInit} from '@angular/core';
import {SchoolService} from '../../school.service';
import {Router} from '@angular/router';
import {School} from '../../school.model';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-allschools',
  templateUrl: './allschools.component.html',
  styleUrls: ['./allschools.component.css']
})
export class AllschoolsComponent implements OnInit {

  school: School[];


  constructor(private schoolService: SchoolService, private router: Router) {
  }

  ngOnInit() {
    this.fetchSchool();
  }

  fetchSchool() {
    this.schoolService
      .getSchool()
      .subscribe((data: School[]) => {
        let schoolNames = '';
        let counter = 0;
        data.forEach((sc) => {
          schoolNames = schoolNames + (counter > 0 ? '<br/>' : '') + sc.name;
          counter = counter + 1;
        });

        // @ts-ignore
        this.school = schoolNames;
      });
  }

}
