import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(){}

  loginWithEmail() {
    const { email, password } = this.loginForm.value;
    if (email && password) {
      this.auth.loginWithEmail(email, password).subscribe({
        next: cred => console.log('Login con email:', cred),
        error: err => console.error('Error:', err)
      });
    }
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle().subscribe({
      next: cred => console.log('Login con Google:', cred),
      error: err => console.error('Error:', err)
    });
  }


  loginWithApple() {
    this.auth.loginWithApple().subscribe({
      next: cred => console.log('Login con Apple:', cred),
      error: err => console.error('Error:', err)
    });
  }


}
