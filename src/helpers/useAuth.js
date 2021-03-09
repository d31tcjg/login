import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../config/firebase";

import { useAuth } from "@vueuse/firebase";

firebase.initializeApp(firebaseConfig);

const { auth } = firebase;

export const { isAuthenticated, user } = useAuth();

export const signIn = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);

export const signOut = () => auth().signOut();
