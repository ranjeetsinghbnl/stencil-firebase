# Stencil + Firebase 👋
This is a boilerplate for creating a webapp using [Stencil](https://github.com/ionic-team/stencil) + [Firebase](https://firebase.google.com) + [Stencil Store](https://stenciljs.com/docs/stencil-store). 

<img src="https://i.gyazo.com/483076401df66d10a9a352adbfe85ef9.png" alt="Login Page">

## Features 📋

- Firebase setup
- Stencil Store setup
- Login/Register/Update Profile/Logout functionality(Basic one)
- Protecting routes that are accessed after login

## Getting Started 🚀

To start using this boilerplate, clone this repo to a new directory:

```bash
git clone https://github.com/ranjeetsinghbnl/stencil-firebase.git
```

and run:

```bash
npm install
```

## Usage 🚊

Setup Firebase configuration

Please setup firebase configuration in the file
```
src -> config -> config.ts
```
```js
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
```
You can find more about firebase web config setup [Firebase Web Config](https://firebase.google.com/docs/web/setup)

To start a project, run:
```bash
npm run start
```

To build the app for production, run:

```bash
npm run build
```

To run the unit tests once, run:

```
npm run test
```

To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```

## Project structure 🗄️

### Service
This class will handle application authenticate features to firebase.
```
src -> services -> auth.service.ts -> Class FirebaseAuthService
```
You can create more classes to group a functionality.

### Store
Application store
```
src -> store -> app.store.ts
```

### Interfaces
Interfaces used in the application
```
src -> interface -> interface.ts
```
### Utility
Utility for parsing application messages and holding form configurations
```
src -> util -> util.ts
```
### Configuration
Application level configurations
```
src -> config -> config.ts
```
### Assets
Application level assets
```
src -> assets
```
### Components
Application level components

```
src -> components ->
1. <app-flash-message> for showing alert messages
2. <app-home> Dashboard 
3. <app-root> entry component of the application
4. <common> sidebar functional component used in login/register components
5. <page> for showing pages
6. <auth> -> having login/register/update-profile components
```

### Styling 💀
I have used `scss` for styling components. Ths boilerplate have a basic design i.e it focus more on configuring and using firebase in stencil web app along with stencil store. You can customize the looks as per your needs.

## Firebase Error Messages
I have shown the error message directly without modifying them returned by the API. You can customize them by modifying the `FirebaseAuthService` code

## Contributing 👏
- :octocat: [Pull requests](https://github.com/ranjeetsinghbnl/stencil-firebase/pulls) and 🌟 stars are always welcome.
- For changes, please open an [issue](https://github.com/ranjeetsinghbnl/stencil-firebase/pulls) first to discuss what you would like to change.

## Contact 📩
📧 ranjeetsingh.bnl@gmail.com

🐦 Twitter [@ranjeetsingh_bl](https://twitter.com/ranjeetsingh_bl)

💼 Linkedin [@ranjeetsinghbnl](linkedin.com/in/ranjeetsinghbnl)

## License
MIT &copy; [Ranjeet Singh](https://github.com/ranjeetsinghbnl)
