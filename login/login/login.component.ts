import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = signal<string>('');

 
constructor( private fb: FormBuilder,
  private authService: AuthService,
  private router: Router){
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
}




onSubmit() {
  // if (this.loginForm.valid) {
  //   const { username, password } = this.loginForm.value;
  //   this.authService.login(username!, password!).subscribe({
  //     next: (success) => {
  //       if (success) {
  //         this.router.navigate(['/dashboard']);
  //       } else {
  //         this.errorMessage.set('Invalid username or password');
  //       }
  //     },
  //     error: (error) => {
  //       this.errorMessage.set('An error occurred. Please try again.');
  //       console.error('Login error:', error);
  //     }
  //   });
  // }
}
}
