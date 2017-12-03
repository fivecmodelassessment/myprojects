  import firebase from 'firebase'

  const config = {
      apiKey: "AIzaSyDbEuYd0xi_Ywx8kVJhTIAdBJjYXCSZgR4",
      authDomain: "combustion-472b5.firebaseapp.com",
      databaseURL: "https://combustion-472b5.firebaseio.com",
      projectId: "combustion-472b5",
      storageBucket: "combustion-472b5.appspot.com",
      messagingSenderId: "59555080199"
    };

  firebase.initializeApp(config)

  export const ref = firebase.database().ref()
  export const firebaseAuth = firebase.auth
