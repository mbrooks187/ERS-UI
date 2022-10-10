import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../modules/credentials';
import { UserResponse } from '../modules/user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  user: UserResponse = {
    id:"",
    username:"",
    email:"",
    firstName:"",
    lastName:"",
    isActive:false,
    roleName:""
  }

  login(credentials:Credentials):Observable<HttpResponse<UserResponse>>{

  

  return this.http.post("http://ersapi-env.eba-asxkcpjm.us-west-1.elasticbeanstalk.com/revature/auth", credentials) as Observable<HttpResponse<UserResponse>>

}


}
