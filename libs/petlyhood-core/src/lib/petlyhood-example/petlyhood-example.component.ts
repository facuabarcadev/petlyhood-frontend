import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';
import { User } from 'firebase/auth';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './petlyhood-example.component.html',
  styleUrls: ['./petlyhood-example.component.scss'],
})
export class AuthComponent implements OnInit {
  public currentUser: User | null = null;
  public errorMessage: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {

    this.authService.getCurrentUserObservable().subscribe({
      next: (user) => {
        this.currentUser = user;
      },
      error: (error) => {
        console.error('Error al recibir el estado del usuario:', error);
        this.errorMessage = 'Error obteniendo el estado del usuario.';
      },
    });
  }

  async loginWithGoogle(): Promise<void> {
    try {
      this.errorMessage = null; // Reiniciar el mensaje de error
      await this.authService.loginWithGoogle();
    } catch (error) {
      console.error('Error durante el inicio de sesión con Google:', error);
      this.errorMessage = 'Hubo un problema al intentar iniciar sesión.';
    }
  }

  async logout(): Promise<void> {
    try {
      this.errorMessage = null; // Reiniciar el mensaje de error
      await this.authService.logout();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      this.errorMessage = 'Hubo un problema al intentar cerrar sesión.';
    }
  }
}
