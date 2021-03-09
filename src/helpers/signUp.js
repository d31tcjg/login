import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../config/firebase";

import { useAuth } from "@vueuse/firebase";

const { auth } = firebase;

export const { isAuthenticated, user } = useAuth();

export const submit = (email, password) =>
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
