import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyARljxaA9c5yLayIggnSDBwJjX7oy6VoRQ',
  databaseURL: 'https://planner-8967f.firebaseio.com/',
  storageBucket: 'gs://planner-8967f.appspot.com',
};

firebase.initializeApp(config);

export default firebase;
