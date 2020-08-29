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

export {
  parseFirebaseErrors,
  appMsg,
  getFormValidations
}