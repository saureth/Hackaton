import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = 'http://192.168.137.1:3000';
  loginContext = '/login';

  constructor(private http: HttpClient) {
  }

  login(us: any, pw: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('email', us.toString());
    params = params.append('password', pw.toString());
    const res = this.http.get(this.baseUrl + this.loginContext, {params});
    return res;
  }

}
