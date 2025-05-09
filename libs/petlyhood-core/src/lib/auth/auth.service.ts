import { Injectable } from '@angular/core';
import { initializeApp, getApps } from 'firebase/app';
import {
  getAuth, GoogleAuthProvider, signInWithPopup, signOut, Auth, User
} from 'firebase/auth';
import { firebaseConfig } from '../firebase/firebase.config';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, BehaviorSubject, Observable } from 'rxjs';
import { environment as env } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  private auth: Auth = getAuth(this.firebaseApp);
  private currentUser$ = new BehaviorSubject<User | null>(this.auth.currentUser);

  constructor(private http: HttpClient) {
    // Suscribirse a los cambios de estado de Firebase Auth
    this.auth.onAuthStateChanged((user) => {
      this.currentUser$.next(user);
    });
  }

  /**
   * Iniciar sesión con Google y registrar al usuario en el backend.
   */
  async loginWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth, provider);
      const token = await result.user.getIdToken();

      await firstValueFrom(
        this.http.post(
          `${env.apiUrl}/api/users/register`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      );

      console.log('Registro/login exitoso en el backend.');
    } catch (error) {
      console.error('Error durante el login con Google:', error);
      throw error; // Propaga el error en caso de que necesites manejarlo fuera del servicio
    }
  }

  /**
   * Cerrar sesión del usuario tanto en Firebase como en el backend.
   */
  async logout(): Promise<void> {
    try {
      const token = await this.getCurrentToken();

      // Si el backend requiere invalidar el token o limpiar sesiones
      if (token) {
        // await firstValueFrom(
        //   this.http.post(
        //     `${env.apiUrl}/api/users/logout`,
        //     {}, // el backend puede procesar la lógica
        //     {
        //       headers: {
        //         Authorization: `Bearer ${token}`,
        //       },
        //     }
        //   )
        // );
      }

      // Cerrar sesión en Firebase
      await signOut(this.auth);
      console.log('Cierre de sesión exitoso.');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  }

  /**
   * Obtener el token actual del usuario autenticado.
   */
  async getCurrentToken(): Promise<string | null> {
    try {
      const user = this.auth.currentUser;
      return user ? await user.getIdToken() : null;
    } catch (error) {
      console.error('Error obteniendo el token de usuario:', error);
      return null;
    }
  }

  /**
   * Obtener el usuario actual autenticado.
   */
  getCurrentUser(): User | null {
    return this.auth.currentUser;
  }

  /**
   * Obtener un observable para subscripción en tiempo real al estado del usuario.
   */
  getCurrentUserObservable(): Observable<User | null> {
    return this.currentUser$.asObservable();
  }
}
