// routes
import { paths } from 'src/routes/paths';

// API
// ----------------------------------------------------------------------

export const HOST_API = 'https://api-dev-minimal-v510.vercel.app';
export const ASSETS_API = 'https://api-dev-minimal-v510.vercel.app';

export const FIREBASE_API = {
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
  measurementId: '',
};

export const AMPLIFY_API = {
  userPoolId: '',
  userPoolWebClientId: '',
  region: '',
};

export const AUTH0_API = {
  clientId: '',
  domain: '',
  callbackUrl: '',
};

export const MAPBOX_API = '';

// ROOT PATH AFTER LOGIN SUCCESSFUL
export const PATH_AFTER_LOGIN = paths.dashboard.root; // as '/dashboard'
