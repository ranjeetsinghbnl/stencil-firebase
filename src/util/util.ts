/**
 *  @fileOverview Write all the utility functions
 *
 *  @author  Ranjeet Singh
 */

import { IFirebaseError, IErrorRes } from "../interface/interface";

const parseFirebaseErrors = (frbError: IFirebaseError): IErrorRes => {
  let errorRes = {
    message: "",
    code: ""
  };
  errorRes.code = frbError.code
  if (frbError.code == 'auth/internal-error') {
    errorRes.message = 'Internal error occurred. Please check console for more details.';
  } else {
    errorRes.message = frbError.message;
  }
  console.error('firebase error', frbError);
  return errorRes;
};
const appMsg = (key: string): string => {
  const msg = {
    'server': 'An internal error occurred, please try again.',
    'server-ref': 'Internal error, Please try to refresh your page.',
    'not-found': 'The resource you are looking for not found.',
    'logout': 'You are logout out successfully.',
    'update-profile': 'Your profile has been updated successfully.',
    'update-password': 'Your password has been updated successfully.'
  };
  return msg[key] ? msg[key] : '';
};
const checkEmpty = (value: any) => {
  if (value) {
    return true;
  } else {
    return false;
  }
}
const checkTrue = (value) => {
  return value === true;
}
const getFormValidations = (key, values = {}) => {
  const validations = {
    login: {
      email: {
        value: values['email'] ? values['email'] : null,
        validate: checkEmpty,
        isValid: values['email'] ? true : false
      },
      password: {
        value: values['password'] ? values['password'] : null,
        validate: checkEmpty,
        isValid: values['password'] ? true : false
      }
    },
    register: {
      name: {
        value: values['name'] ? values['name'] : null,
        validate: checkEmpty,
        isValid: values['name'] ? true : false
      },
      email: {
        value: values['email'] ? values['email'] : null,
        validate: checkEmpty,
        isValid: values['email'] ? true : false
      },
      password: {
        value: values['password'] ? values['password'] : null,
        validate: checkEmpty,
        isValid: values['password'] ? true : false
      },
      terms_agree: {
        value: values['terms_agree'] ? true : false,
        validate: checkTrue,
        isValid: checkTrue(values['terms_agree'])
      }
    },
    updateProfile: {
      name: {
        value: values['name'] ? values['name'] : null,
        validate: checkEmpty,
        isValid: values['name'] ? true : false
      }
    }
  };
  return validations[key] ? validations[key] : {}
}
const inputClass = 'block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input';
const errorClass = 'border-red-600 focus:border-red-400 focus:shadow-outline-red';
const checkActiveUrl = (url) => {
  return location.pathname == url;
}
export {
  parseFirebaseErrors,
  appMsg,
  getFormValidations,
  inputClass,
  errorClass,
  checkActiveUrl
}