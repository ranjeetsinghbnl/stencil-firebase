/**
 *  @fileOverview Write all the url used in the application
 *
 *  @author  Ranjeet Singh
 */

const appUrl = {
  register: '/register',
  login: '/login',
  root: '/',
  forgotPassword: '/forgot-password',
  profile: '/profile',
  pages: {
    privacyPolicy: '/pages/privacy-policy',
    uiKit: '/pages/ui-kit'
  }
}
const menus = {
  urls: [
    {
      url: appUrl.root,
      title: 'Dashboard'
    },
    {
      url: appUrl.pages.uiKit,
      title: 'Ui Kit'
    }
  ]
};
export {
  appUrl,
  menus
}