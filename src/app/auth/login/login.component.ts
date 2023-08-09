import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  //isAuthenticated: boolean = false;

  loginForm=this.formBuilder.group({
    username: ['',[Validators.required]],
    password: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      if (username === 'usuario' && password === 'contraseña') {

        console.log("siiiii")
        this.router.navigateByUrl('/dashboard');
        this.loginForm.reset();
      }
    } else {
      alert("Error al ingresar los datos");
    }
  }
}
