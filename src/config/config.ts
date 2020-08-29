/**
 *  @fileOverview Write all the configuration values to be used ina project
 *
 *  @author  Ranjeet Singh
 */

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
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