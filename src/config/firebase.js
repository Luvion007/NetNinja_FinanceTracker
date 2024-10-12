import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyALcL-BHVcLS2lnERs6cAo4-SDPvDaTXdg",
    authDomain: "mymoney-2de83.firebaseapp.com",
    projectId: "mymoney-2de83",
    storageBucket: "mymoney-2de83.appspot.com",
    messagingSenderId: "478451544347",
    appId: "1:478451544347:web:bd6806de60c43f801a23be"
  
  };



//init firebase
firebase.initializeApp(firebaseConfig)

//
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export {projectFirestore, projectAuth}