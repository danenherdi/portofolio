import { initializeApp } from "firebase/app";
// Import the functions you need from the SDKs you need
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import { getAnalytics, type Analytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

// Astro exposes environment variables prefixed with PUBLIC_ to the client
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
export const storage = getStorage(app);

// Initialize Analytics only on the client side (browser) to prevent SSR build errors
export let analytics: Analytics | undefined;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

// Initialize specific services here and export them, e.g.:
// export const db = getFirestore(app);
// export const auth = getAuth(app);
