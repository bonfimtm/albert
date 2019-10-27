// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  serverUrl: 'http://localhost:4200',
  firebase: {
    apiKey: 'AIzaSyAg5FvvPoEkE3sn43vKvX6n9ZeE8hQ1Gqk',
    authDomain: 'albert-a66bc.firebaseapp.com',
    databaseURL: 'https://albert-a66bc.firebaseio.com',
    projectId: 'albert-a66bc',
    storageBucket: 'albert-a66bc.appspot.com',
    messagingSenderId: '942524623318'
  },
};
