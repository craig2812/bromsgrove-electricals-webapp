import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, Firestore } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";
import { set } from 'firebase/database';

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUG8MvYI1nD9aoEYRD5Nnlo6Bg_qLnD8Q",
    authDomain: "bromsgrovemaintenance7559.firebaseapp.com",
    projectId: "bromsgrovemaintenance7559",
    storageBucket: "bromsgrovemaintenance7559.appspot.com",
    messagingSenderId: "547025782639",
    appId: "1:547025782639:web:baaaf867f1e003c2de8a9a",
    measurementId: "G-EEG4JY02JS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get a list of pictures from your database
// export async function getPictures(db: Firestore) {
//     const pictureCollection = collection(db, '/pictures');
//     const picSnapshot = await getDocs(pictureCollection);
//     const pictureList = picSnapshot.docs.map(pic => pic.data());
//     return pictureList;
// }


// Add a new document in collection "cities"
// export async function addPictureNoId() {
// await setDoc(doc(db, "pictures", "new-picture"), {
//   id: "Tester",
//   url: "CA",
//   description: "USA",
//   type: "Indoor",
//   isShown: false
// })
// }

// export async function addPicture(pictureObj: Picture) {
//     await setDoc(doc(db, "pictures", pictureObj.id.toString()), {
//         id: pictureObj.id,    
//         url: pictureObj.url,
//         description: pictureObj.descritption,
//         type: pictureObj.type,
//         isShown: pictureObj.isShown
//     });
//     console.log("Document written with ID:", pictureObj.id);
// }


// type Picture = {
//     id: number;
//     url: string;
//     descritption: string;
//     type: string;
//     isShown: boolean;
// };

// export async function fetchPics(): Promise<Picture[]> {
//     const picRef = collection(db, 'pictures');
//     const querySnapshot = await getDocs(picRef);
//     const pictures = querySnapshot.docs.map((doc) => doc.data() as Picture);

//     return pictures;
// }