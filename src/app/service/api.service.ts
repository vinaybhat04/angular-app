import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "../model/user.model";
import {Observable} from "rxjs/index";
import {ApiResponse} from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://127.0.0.1:8080/api/';

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'api/login', loginPayload);
  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + 'getServerData');
  }
  sendMail(id: number) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl + 'sendMail/' + id);
  }

  postFile(fileToUpload: File): Observable<boolean> {
    const endpoint = this.baseUrl + 'imprtServerFile/' + 1;
    const formData: FormData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    return this.http
      .post(endpoint, formData);

}

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
