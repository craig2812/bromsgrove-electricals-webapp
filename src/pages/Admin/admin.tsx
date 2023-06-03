import * as React from 'react';
import { useState } from 'react';
import { addImage, fetchImages, fetchReviews } from '../../firebase/firebaseController';
import '../page.css';
import 'firebase/firestore'


const Admin = () => {

    interface ImageData {
        name: string;
        url: string;
        createdAt: Date;
    }

    const initialFile = new File(["foo"], "foo.txt", {
        type: "image/jpeg",
    })
    const [imageUpload, setImageUpload] = useState<File>(initialFile)
    const [imageCategory, setImageCategory] = useState('misc')
    const [imageName, setImageName] = useState('')
    const [images, setImages] = useState<ImageData[]>([]);

    React.useEffect(() => {
        const images = fetchImages('images').then((images) => console.log('images', images));
        const revoew = fetchReviews().then((rev)=> console.log('reviews', rev))
    }, []);



    const handleImageUpload = () => {
        addImage(imageCategory, imageName, imageUpload)
        alert('Image has been successfully uploaded: ' + imageUpload.name)
    }

    return (
        <div className="page-container">
            <h1>Admin Page</h1>
            <form onSubmit={handleImageUpload} className='form-container'>
                <input type="file" onChange={(event) => { if (event.target.files) { setImageUpload(event?.target.files[0]) } }}></input>
                Image Type
                <select defaultValue={'DEFAULT'} name="bad_day" onChange={(event) => { setImageCategory(event.target.value) }}>
                    <option value="DEFAULT" disabled>Choose an image type ...</option>
                    <option value="domestic">Domestic</option>
                    <option value="garden" >Garden</option>
                    <option value="testing">Testing</option>
                    <option value="charging">Charging</option>
                    <option value="water" >Water</option>
                    <option value="commercial">Commercial</option>
                    <option value="misc">Misc</option>
                </select>
                Image Name (optional)
                <input type="text" onChange={(event) => { setImageName(event.target.value) }}></input>
                <button type="submit">Add Picture</button>
            </form>
        </div>
    );
};


export default Admin;