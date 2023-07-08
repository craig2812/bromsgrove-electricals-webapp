import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, Firestore, deleteDoc } from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytes, listAll, getDownloadURL, updateMetadata, getMetadata, getStorage } from 'firebase/storage'
import { firebaseConfig, storage, firestore} from './config'
import React, { useState } from 'react';

const imageSerial = Math.floor(Math.random() * 1000)
const app = initializeApp(firebaseConfig);

//Images from Firebase Storage

// Commented out as can't get working with any local or deployed app 

export interface ImageFetchObject  {
name: string,
url: string,
createdAt: Date,
category?: string
}

// Not working as intended - needs to figure out how to only call function once and not overwrite images array on each render
export const fetchImages = async (imageFolder: string) => {
    const folderRef = ref(storage, imageFolder)

    const imagesSnapshot = await listAll(folderRef);
    const promises = imagesSnapshot.items.map(async (imageRef) => {
        const metadata = await getMetadata(imageRef);
        const createdAt = new Date(metadata.timeCreated);
        return {
            name: metadata.customMetadata?.name.length != 0 ? metadata.customMetadata?.name : 'picture',
            url: await getDownloadURL(imageRef),
            createdAt: createdAt,
            category: metadata.customMetadata?.category
        } as ImageFetchObject;
    });

    const imagesData = await Promise.all(promises);
    const sortedImages = imagesData.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

    return sortedImages
};


export const addImage = async (imageCategory = 'misc', imageName: string, imageUpload: File) => {
    const imageNameRef = imageName.toString().length > 0 ? imageName : imageUpload?.name
    const imageFullName = imageNameRef + '_' + imageSerial
    const imageRef = ref(storage, `images/${imageFullName}`)
    const customMeta = {
        contentType: 'image/jpeg',
        customMetadata: {
            'name': imageNameRef,
            'category': imageCategory,
            'uploadDate': new Date().toDateString()
        }
    };
     await uploadBytes(imageRef, imageUpload, customMeta)
    };

//Documents from Firestore
export type Review = {
    id: number;
    author: string;
    message: string;
    service: string;
    isShown: boolean;
    rating: number;
    date: string;
};

export async function addReview(reviewObj: Review) {
    await setDoc(doc(firestore, "reviews", reviewObj.id.toString()), {
        id: reviewObj.id,    
        author: reviewObj.author,
        message: reviewObj.message,
        service: reviewObj.service,
        isShown: reviewObj.isShown,
        rating: reviewObj.rating,
        date: reviewObj.date
    });
    console.log("Document written with ID:", reviewObj.id);
}

export async function deleteReview(reviewObj: Review) {
    await deleteDoc(doc(firestore, "reviews", reviewObj.id.toString()));
    console.log("Document Deleted with ID:", reviewObj.id);
}

export async function fetchReviews(): Promise<Review[]> {
    const reviewRef = collection(firestore, 'reviews');
    const querySnapshot = await getDocs(reviewRef);
    const reviews = querySnapshot.docs.map((doc) => doc.data() as Review);

    return reviews;
}
