import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-register',
  imports: [ CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private fb = inject(FormBuilder);
  private auth = inject(AuthService);

  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(){}

  register() {
    const { email, password } = this.registerForm.value;
    if (email && password) {
      this.auth.registerWithEmail(email, password).subscribe({
        next: cred => console.log('Usuario registrado:', cred),
        error: err => console.error('Error al registrar:', err)
      });
    }
  }

}
