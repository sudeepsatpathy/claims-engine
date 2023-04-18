import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCLgciJ_md1h8sOEy8bdmLdKIzHKC23SPc",
  authDomain: "claims-engine.firebaseapp.com",
  projectId: "claims-engine",
  storageBucket: "claims-engine.appspot.com",
  messagingSenderId: "402987605516",
  appId: "1:402987605516:web:9ba92152347964da7e9829"
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }