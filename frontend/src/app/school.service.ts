import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getSchool() {
    return this.http.get(`${this.uri}/school`);
  }

  getSchoolById(id) {
    return this.http.get(`${this.uri}/school/${id}`);
  }

}
