import { environment as env } from '../../environments/environment';

export const firebaseConfig = {
  apiKey: env.firebase.apiKey,
  authDomain: env.firebase.authDomain || '',
  projectId: env.firebase.projectId || '',
  storageBucket: env.firebase.storageBucket || '',
  messagingSenderId: env.firebase.messagingSenderId || '',
  appId: env.firebase.appId || '',
  measurementId: env.firebase.measurementId || '',
};
