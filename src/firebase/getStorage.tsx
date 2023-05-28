import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, Firestore } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";
import { set } from 'firebase/database';
import { ref, uploadBytes, listAll, getDownloadURL, updateMetadata } from 'firebase/storage'
import {storage} from './config'
import React from 'react';



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
export const firestore = getFirestore(app);


export async function fetchPics(route: string){
const imageListRef = ref(storage, route)

// await listAll(imageListRef).then((response) => {
//     const ImageURL = getDownloadURL(ref(storage, response.items[0].fullPath));
//     response.items.forEach(
//         (item)=> {
//            const fullLink = getDownloadURL(ref(storage, item.fullPath))
//            console.log('full link', fullLink)
//         }
//     )
//     return response
// })}

React.useEffect(() => {
    listAll(imageListRef).then((response) => {
    response.items.forEach(
        (item)=> {
            getDownloadURL(ref(storage, item.fullPath)).then(
            (link) => console.log('full link', link)
           )
           
        }
    )
        return response
    })
}, []
)
}


// Create file metadata to update


//   export const updatePicMetaData = () => {

//     const pic1 = ref(storage, 'customer/pic1.jpg');

//     const newMetadata = {
//         customMetadata: {
//             'location': 'Yosemite, CA, USA',
//             'activity': 'Hiking',
//             'type': 'indoor'
//           }
//     };
    
    
//     // Update metadata properties
//     updateMetadata(pic1, newMetadata)
//       .then((metadata) => {
//         console.log('metadata', metadata)
//       }).catch((error) => {
//         // Uh-oh, an error occurred!
//       });
//   }
export const handleImageUpload = (imageType: string, imageName: string, imageUpload: File, imageUuid?: string) => {
    const imageFullName = imageType + '_' + (imageName.length > 0 ? imageName : imageUpload?.name) + '_' + imageUuid
    const imageRef = ref(storage, `images/${imageFullName}`)
    console.log('button clicked', imageFullName)

    uploadBytes(imageRef, imageUpload).then(() => {
        console.log(`image uploaded: ${imageFullName}`)
        alert(`image uploaded: ${imageFullName}`)
    })
};