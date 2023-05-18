import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  doc,
} from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyCnWGsEZ3_cvo3L7tt0rE-B6-MJAJBELs4",
  authDomain: "work-3-a231b.firebaseapp.com",
  projectId: "work-3-a231b",
  storageBucket: "work-3-a231b.appspot.com",
  messagingSenderId: "77864890768",
  appId: "1:77864890768:web:d708d820a56b2aa5eac315",
};

export const getTexts = async () => {
  const app = await initializeApp(firebaseConfig);
  const db = await getFirestore(app);
  const textsCollection = await collection(db, "texts");
  const textsDoc = await getDocs(textsCollection);
  return textsDoc;
};

export const getText = async (id) => {
  const app = await initializeApp(firebaseConfig);
  const db = await getFirestore(app);
  let response = {
    text: {},
    quiz: [],
  };
  // マテリアルを取得
  const docRef = await doc(db, "texts", id);
  const docSnap = await getDoc(docRef);
  response.text = await docSnap.data();

  // クイズを取得
  // q.idで各クイズのidが取得できて、q.data().idでフィールドのidが取得できます！
  const quizCollection = await collection(db, "texts", id, "quiz");
  const quizDoc = await getDocs(quizCollection);
  quizDoc.forEach((q) => response.quiz.push(q.data()));

  return response;
};

// export const add = async (id) => {
//   const app = await initializeApp(firebaseConfig);
//   const db = await getFirestore(app);
//   const textsCollection = await collection(
//     db,
//     "texts",
//     "wNaZUv4FWPd2udJhMhth",
//     "quiz"
//   );
//   quiz.map(async (q) => {
//     await addDoc(textsCollection, q);
//   });
//   // const docSnap = await addDoc(textsCollection, quiz)
// };
