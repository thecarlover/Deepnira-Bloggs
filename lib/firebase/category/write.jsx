import { db, storage } from '@/lib/firebase';
import { Timestamp, doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React from 'react';

const createNewCategory = async({ data, image }) => {
    if (!data?.categoryName) {
        throw new Error('Name is required');
    }
    if (!data.categorySlug) {
        throw new Error('Slug is required');
    }
    if (!data.description) {
        throw new Error('Description is required');
    }
    if (!image) {
        throw new Error('Image is required');
    }

    // Ensure the slug is defined and valid
    const slug = data.categorySlug;
    if (!slug) {
        throw new Error('Slug is required and should be valid');
    }

    const imageRef = ref(storage, `categories/${slug}`);
    await uploadBytes(imageRef, image);
    const imageURL = await getDownloadURL(imageRef);

    const firestoreRef = doc(db, `categories/${slug}`);
    await setDoc(firestoreRef, {
        ...data,
        id: slug,
        iconURL: imageURL,
        timeStamp: Timestamp.now(),
    });

    return (
        <>
        </>
    );
};

export default createNewCategory;
