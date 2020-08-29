/**
 * This class act as service to handle firebase operations related to user authentications.
 * Login/Register/Update Profile/Change Password/Logout
 * 
 * @class FirebaseAuthService
 *
 */

import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig, httpCode } from "../config/config";
import { AppState } from "../store/app.store";
import { IBaseRes, IUserRegister, IUserLogin } from "../interface/interface";
import { parseFirebaseErrors, appMsg } from "../util/util";

class FirebaseAuthService {

  /**
  * @constructor
  */
  constructor() {
    this.init()
  }

  /**
  * Initialize firebase instance
  * If user is already login set user state
  * @name init
  * 
  * @returns {void}
  */
  private init(): void {
    AppState.appInit = true;
    try {
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged((user => {
        if (user) {
          AppState.user = user;
          AppState.isAuthenticated = true;
        } else {
          AppState.user = undefined;
          AppState.isAuthenticated = false;
        }
      }));
      AppState.appInit = false;
    } catch (error) {
      const errorRes = this.buildErrorRes(httpCode.serverError, error);
      console.log(error, 'ee')
      AppState.appInit = false;
      AppState.appInitError = errorRes.message ? errorRes.message : appMsg('server-ref');
    }
  }

  /**
  * Build success response
  * @name buildRes
  * 
  * @param   {number} status  status code
  * @param   {any} data       response data
  * @param   {string} message message to show
  * @param   {any} errors     errors object if any
  * 
  * @returns {IBaseRes}
  */
  private buildRes(status: number, data?: any, message?: string, errors?: any): IBaseRes {
    return {
      status,
      data,
      errors,
      message
    }
  }

  /**
  * Build error response
  * @name buildErrorRes
  * 
  * @param   {number} status  status code
  * @param   {any} errors     errors object if any
  *
  * @returns {IBaseRes}
  */
  private buildErrorRes(status: number, errors?: any): IBaseRes {
    let errorRes = parseFirebaseErrors(errors)
    return {
      status: status,
      data: null,
      errors: {},
      message: errorRes.message
    }
  }

  /**
  * Get current user session
  * @name getCurrentUser
  *
  * @returns {IBaseRes} Promise that represents <IBaseRes> object
  */
  async getCurrentUser(): Promise<IBaseRes> {
    try {
      const user = await firebase.auth().currentUser;
      if (user) {
        // User is signed in.
        if (!AppState.isAuthenticated) {
          AppState.isAuthenticated = true
        }
        if (AppState.user == undefined) {
          AppState.user = user
        }
        return this.buildRes(httpCode.success, user)
      } else {
        AppState.isAuthenticated = false
        AppState.user = undefined
      }
      return this.buildRes(httpCode.notFound, {}, appMsg('not-found'));
    } catch (error) {
      return this.buildErrorRes(httpCode.serverError, error);
    }
  }

  /**
  * Handle firebase login
  * @name login
  * 
  * @param {IUserLogin} userData
  * 
  * @returns {IBaseRes} Promise that represents <IBaseRes> object
  */
  async login(userData: IUserLogin): Promise<IBaseRes> {
    try {
      const userDetails = await firebase.auth().signInWithEmailAndPassword(userData.email, userData.password);
      return this.buildRes(httpCode.success, userDetails);
    } catch (error) {
      return this.buildErrorRes(httpCode.serverError, error);
    }
  }

  /**
  * Handle firebase registration
  * @name register
  *
  * @param {IUserRegister} userData
  *
  * @returns {IBaseRes} Promise that represents <IBaseRes> object
  */
  async register(userData: IUserRegister): Promise<IBaseRes> {
    try {
      const userDetails = await firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password);
      return this.buildRes(httpCode.success, userDetails);
    } catch (error) {
      return this.buildErrorRes(httpCode.serverError, error);
    }
  }

  /**
  * Handle firebase logout
  * @name logOut
  *
  * @returns {IBaseRes} Promise that represents <IBaseRes> object
  */
  async logOut(): Promise<IBaseRes> {
    try {
      if (AppState.isAuthenticated) {
        AppState.isAuthenticated = false;
        AppState.user = undefined;
        try {
          await firebase.auth().signOut();
        } catch (error) {
          return this.buildErrorRes(httpCode.serverError, error);
        }
      }
      return this.buildRes(httpCode.success, {}, appMsg('logout'));
    } catch (error) {
      return this.buildErrorRes(httpCode.serverError, error);
    }
  }

  /**
  * Handle firebase update user profile
  * @name updateProfile
  *
  * @param {string} displayName
  *
  * @returns {IBaseRes} Promise that represents <IBaseRes> object
  */
  async updateProfile(displayName: string): Promise<IBaseRes> {
    try {
      let user = await this.getCurrentUser();
      if (user.data) {
        await user.data.updateProfile({
          displayName
        });
        AppState.user = {
          ...AppState.user,
          displayName,
        };
      }
      return this.buildRes(httpCode.success, {}, appMsg('update-profile'));
    } catch (error) {
      return this.buildErrorRes(httpCode.serverError, error);
    }
  }

  /**
  * Handle firebase update user password
  * @name updatePassword
  *
  * @param {string} newPassword
  *
  * @returns {IBaseRes} Promise that represents <IBaseRes> object
  */
  async updatePassword(newPassword: string): Promise<IBaseRes> {
    try {
      let user = await this.getCurrentUser();
      if (user.data) {
        await user.data.updatePassword(newPassword);
      }
      return this.buildRes(httpCode.success, {}, appMsg('update-password'));
    } catch (error) {
      return this.buildErrorRes(httpCode.serverError, error);
    }
  }
}

export const AuthService = new FirebaseAuthService();