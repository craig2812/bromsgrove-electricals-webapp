import * as React from 'react';
import { useState } from 'react';
import { fetchPics, handleImageUpload } from '../../firebase/getStorage';
import '../page.css';
import { db } from '../../firebase/getData';
import { ref, uploadBytes, listAll, updateMetadata } from 'firebase/storage'
import { storage } from '../../firebase/config';
import { v4 as uuidv4 } from 'uuid';


const Home = () => {

    const initialFile = new File(["foo"], "foo.txt", {
        type: "text/plain",
    })
    const imageUuid = uuidv4();
    const [imageUpload, setImageUpload] = useState<File>(initialFile)
    const [imageType, setImageType] = useState('misc')
    const [imageName, setImageName] = useState('')

    const pictures2 = fetchPics('customer/')

    const handleImageUpload = () => {
        const imageFullName = imageType + '_' + (imageName.length > 0 ? imageName : imageUpload?.name) + '_' + imageUuid
        const imageRef = ref(storage, `images/${imageFullName}`)

        const customMeta = {
            contentType: 'image/jpeg',
            customMetadata: {
                'location': 'UK',
                'name': imageName,
                'type': imageType
            }
        };

        uploadBytes(imageRef, imageUpload, customMeta)
        // updateMetadata(imageRef, customMeta)
    
    }



    return (
        <div className="page-container">
            <h1>Admin Page</h1>

            <input type="file" onChange={(event) => { if (event.target.files) { setImageUpload(event?.target.files[0]) } }}></input>
            Image Type
            <select name="bad_day" onChange={(event) => { setImageType(event.target.value) }}>
                <option value="electrical">Electrical</option>
                <option value="garden" selected>Garden</option>
                <option value="misc" selected>Misc</option>
            </select>
            Image Name (optional)
            <input type="text" onChange={(event) => { setImageName(event.target.value) }}></input>
            <button onClick={handleImageUpload}>Add Picture</button>

        </div>
    );
};

export default Home;