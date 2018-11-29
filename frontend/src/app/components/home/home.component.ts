import {Component, Input, OnInit} from '@angular/core';
import {SchoolService} from 'C:/Users/Brad/FantasticFour/frontend/src/app/school.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';
import {AlertsService} from 'angular-alert-module';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  exampleForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private schoolService: SchoolService, private router: Router) {
  }

  private marked: any;


  ngOnInit() {
    localStorage.clear();
    this.exampleForm = this.formBuilder.group({
      userGpaValue: [''],
      userGreValue: [''],
      userPhValue: [''],
      userLeValue: ['']
    });
  }

  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
  get f() { return this.exampleForm.controls; }
  onSubmit() {
    console.log(this.f.userGpaValue.value);
    console.log(this.f.userGreValue.value);
    console.log(this.f.userPhValue.value);
    console.log(this.f.userLeValue.value);
    alert('Saved!');
    localStorage.setItem('userGpaValue', this.f.userGpaValue.value);
    localStorage.setItem('userGreValue', this.f.userGreValue.value);
    localStorage.setItem('userPhValue', this.f.userPhValue.value);
    localStorage.setItem('userLeValue', this.f.userLeValue.value);

  }
}
