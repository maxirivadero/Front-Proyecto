import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  errorMessage: string | null = null;

  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit() {
    if (this.username === 'usuario' && this.password === 'contraseña') {
      // Simulando un inicio de sesión exitoso
      this.errorMessage = 'Inicio de sesión exitoso';
    } else {
      this.errorMessage = 'Credenciales incorrectas';
    }
  }
}
