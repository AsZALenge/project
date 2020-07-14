import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const API_URL = environment.api_url;

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  public registeruser(body: any) {
    return this.http.post<any>(API_URL + '/user/save', body, this.httpOption)
  }
  public registerdorm(body: any) {
    return this.http.post<any>(API_URL + '/dorm/save', body, this.httpOption)
  }

}
