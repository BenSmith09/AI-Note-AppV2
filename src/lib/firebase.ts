// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  secretKey: process.env.FIREBASE_API_KEY,
  authDomain: "ai-notes-app-88ffb.firebaseapp.com",
  projectId: "ai-notes-app-88ffb",
  storageBucket: "ai-notes-app-88ffb.appspot.com",
  messagingSenderId: "456187386851",
  appId: "1:456187386851:web:7e3aede70270ff78dc5ed6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export async function uploadFileToFirebase(image_url: string, name: string) {
  try {
    const response = await fetch(image_url);
    console.log("response", response);
    const buffer = await response.arrayBuffer();
    const file_name = name.replace(" ", "") + Date.now + ".jpeg";
    console.log("file_name", file_name);
    const storageRef = ref(storage, file_name);
    await uploadBytes(storageRef, buffer, {
      contentType: "image/jpeg",
    });
    const firebase_url = await getDownloadURL(storageRef);
    return firebase_url;
  } catch (error) {
    console.error("uncaught error", error);
  }
}
