import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: 'AIzaSyCzsthSIqHEqao1YtaG6J_4gw4YP9moWwQ',
    authDomain: 'todolist-40268.firebaseapp.com',
    projectId: 'todolist-40268',
    storageBucket: 'todolist-40268.appspot.com',
    messagingSenderId: '90399339393',
    appId: '1:90399339393:web:a0ef3af978d42aad4cae80',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
export default firebase;
