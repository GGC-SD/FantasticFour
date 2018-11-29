import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getSchools() {
    // @ts-ignore
    return this.http.get(`${this.uri}/schools`);
  }

  getSchool() {
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    return this.http.get(`${this.uri}/school?userGreValue=${localStorage.getItem('userGreValue')}&userGpaValue=${localStorage.getItem('userGpaValue')}&userPhValue=${localStorage.getItem('userPhValue')}&userLeValue=${localStorage.getItem('userLeValue')}`);
  }

  getSchoolById(id) {
    return this.http.get(`${this.uri}/school/${id}`);
  }

}
