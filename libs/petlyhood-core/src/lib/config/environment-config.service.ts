import { Injectable } from '@angular/core';

import { environment as env } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EnvironmentConfigService {
  get apiUrl() {
    return env.apiUrl;
  }

  get firebaseConfig() {
    return env.firebase;
  }
}
