import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, Firestore } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, listAll, getDownloadURL, updateMetadata, getMetadata, getStorage } from 'firebase/storage'
import { firebaseConfig, storage, database} from './config'
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getDatabase } from 'firebase/database';


const imageMiliSeconds = new Date().getUTCMilliseconds();
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

//Images from Firebase Storage

export interface ImageFetchObject  {
name: string,
url: string,
createdAt: Date,
category?: string
}

export const fetchImages = async (imageFolder: string) => {
    const folderRef = ref(storage, imageFolder)

    const imagesSnapshot = await listAll(folderRef);
    const promises = imagesSnapshot.items.map(async (imageRef) => {
        const metadata = await getMetadata(imageRef);
        const createdAt = new Date(metadata.timeCreated);
        return {
            name: metadata.customMetadata?.name,
            url: await getDownloadURL(imageRef),
            createdAt: createdAt,
            category: metadata.customMetadata?.category
        } as ImageFetchObject;
    });

    const imagesData = await Promise.all(promises);
    const sortedImages = imagesData.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return sortedImages
};


export const addImage = (imageCategory: string, imageName: string, imageUpload: File) => {
    const imageFullName = imageCategory + '_' + (imageName.length > 0 ? imageName : imageUpload?.name) + '_' + imageMiliSeconds
    const imageRef = ref(storage, `${imageCategory}/${imageFullName}`)
    const customMeta = {
        contentType: 'image/jpeg',
        customMetadata: {
            'name': imageName,
            'category': imageCategory,
            'uploadDate': new Date().toDateString()
        }
    };
    uploadBytes(imageRef, imageUpload, customMeta)
};

//Documents from Firestore
type Review = {
    id: number;
    author: string;
    message: string;
    service: string;
    isShown: boolean;
    rating: number;
    date: Date;
};

export async function addReview(reviewObj: Review) {
    await setDoc(doc(firestore, "pictures", reviewObj.id.toString()), {
        id: reviewObj.id,    
        url: reviewObj.author,
        description: reviewObj.message,
        type: reviewObj.service,
        isShown: reviewObj.isShown
    });
    console.log("Document written with ID:", reviewObj.id);
}

export async function fetchReviews(): Promise<Review[]> {
    const reviewRef = collection(firestore, 'reviews');
    const querySnapshot = await getDocs(reviewRef);
    const reviews = querySnapshot.docs.map((doc) => doc.data() as Review);

    return reviews;
}
