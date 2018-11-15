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

  id: String;
  school: any = {};

  constructor(private schoolService: SchoolService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {

  }


}
