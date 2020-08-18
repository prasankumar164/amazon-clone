import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyDXYspxbm36TvXJm3SGw7nUZiwt6VnY8Hs",
  authDomain: "clone-project-8bf75.firebaseapp.com",
  databaseURL: "https://clone-project-8bf75.firebaseio.com",
  projectId: "clone-project-8bf75",
  storageBucket: "clone-project-8bf75.appspot.com",
  messagingSenderId: "468762606589",
  appId: "1:468762606589:web:7d6737747a2a7d18c43794",
  measurementId: "G-46LP21CBHW"
})


const db = firebaseapp.firestore();
const auth = firebase.auth()

export { auth };




// const firebaseConfig = {
//     apiKey: "AIzaSyDXYspxbm36TvXJm3SGw7nUZiwt6VnY8Hs",
//     authDomain: "clone-project-8bf75.firebaseapp.com",
//     databaseURL: "https://clone-project-8bf75.firebaseio.com",
//     projectId: "clone-project-8bf75",
//     storageBucket: "clone-project-8bf75.appspot.com",
//     messagingSenderId: "468762606589",
//     appId: "1:468762606589:web:7d6737747a2a7d18c43794",
//     measurementId: "G-46LP21CBHW"
//   };

