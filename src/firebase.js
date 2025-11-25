import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyChP2aXshjzIvF_AdIHzJc0uh1hZLs7GXo",
  authDomain: "oba001-dc0f8.firebaseapp.com",
  projectId: "oba001-dc0f8",
  storageBucket: "oba001-dc0f8.firebasestorage.app",
  messagingSenderId: "988915059432",
  appId: "1:988915059432:web:0dbef21dcaafea4782975d",
  measurementId: "G-6T6ZBGQRM3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function addContactMessage(data) {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...data,
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}