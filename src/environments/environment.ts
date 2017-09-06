// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDYALqaFxwyjwj0zo82pvDzseA4ygCdP7Q",
    authDomain: "udemy-angular4.firebaseapp.com",
    databaseURL: "https://udemy-angular4.firebaseio.com",
    projectId: "udemy-angular4",
    storageBucket: "udemy-angular4.appspot.com",
    messagingSenderId: "725081147895"
  }
};
