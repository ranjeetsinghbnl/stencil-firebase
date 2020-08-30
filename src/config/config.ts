/**
 *  @fileOverview Write all the configuration values to be used ina project
 *
 *  @author  Ranjeet Singh
 */

const firebaseConfig = {
  apiKey: "AIzaSyAvpYHI5KxYtwwNrSvrYsU3VyFETJOu0Cc",
  authDomain: "stencil-auth.firebaseapp.com",
  databaseURL: "https://stencil-auth.firebaseio.com",
  projectId: "stencil-auth",
  storageBucket: "stencil-auth.appspot.com",
  messagingSenderId: "51186892185",
  appId: "1:51186892185:web:a8feecd8dd4c154cebe708"
};

const httpCode = {
  success: 200,
  notFound: 404,
  serverError: 504
};
const appName: string = 'Stencil Firebase';
const appConfig = {
  name: appName,
  pageTitlePrefix: appName,
  pageTitle: {
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    profile: 'Profile',
    password: 'Update Password'
  },
  loadingBtnTxt: 'Loading...'
};
export {
  firebaseConfig,
  httpCode,
  appConfig
}