import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAsRRMDO_jxILqVsPYPW034ogF3fHL7i_c",
    authDomain: "cooking-recipe-website-32c59.firebaseapp.com",
    projectId: "cooking-recipe-website-32c59",
    storageBucket: "cooking-recipe-website-32c59.appspot.com",
    messagingSenderId: "266913535170",
    appId: "1:266913535170:web:3f9747f446e42e1061d75b"
  };


firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }