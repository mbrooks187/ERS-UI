import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/modules/credentials';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private us: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  message: string = "Log in to your ERS"

  credentials: Credentials = {
    username: "",
    password: ""
  }

  loginFunction() {
    this.us.login(this.credentials).subscribe(
      (data: any) => {
        console.log(data)
        this.us.user = data; //the user in the UserService gets populated with the API's userResponse data
        this.router.navigate(['welcome'])
      },

    )

  }

}
