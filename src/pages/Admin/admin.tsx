import * as React from 'react';
import { useState } from 'react';
import { addImage, fetchImages, fetchReviews, ImageFetchObject } from '../../firebase/firebaseController';
import '../page.css';
import 'firebase/firestore'
import { Gallery } from '../../components/PictureBoard/pictureBoard';
import { Reviews } from '@mui/icons-material';
import ReviewForm from '../../components/Reviews/reviews';
import {ReviewDisplay} from '../../components/Reviews/reviewsDisplay';


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

    const handleImageUpload = async (event: any) => {
        event.preventDefault()
        const imageNameUpdated = imageName.length == 0 ? imageUpload.name : imageName

        addImage(imageCategory, imageName, imageUpload)
        .then(() => {alert('Image has been successfully uploaded: ' + imageNameUpdated)})
        .then(() => {console.log('image uploaded')})
        .catch((e) => {
            alert('Image upload has failed for: ' + imageNameUpdated)
            console.log('ErrorUpload:', e)
        })
        .finally(() => event.target.reset())
    }

    return (
        <div className="page-container">
            <h1>Admin Page</h1>
            <form onSubmit={handleImageUpload} className='form-container'>
                <input type="file" onChange={(event) => { if (event.target.files) { setImageUpload(event?.target.files[0]) } }}></input>
                Image Type
                <select defaultValue={'DEFAULT'} name="imageCategories" onChange={(event) => { setImageCategory(event.target.value) }}>
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
                <button type='submit'>Add Picture</button>
        
            </form>
            <div style={{paddingTop:'10px'}}>
                <Reviews></Reviews>
                <ReviewForm></ReviewForm>
                <ReviewDisplay></ReviewDisplay>
            <Gallery></Gallery>
            </div>
        </div>
    );
};


export default Admin;


    // React.useEffect(() => {
    //     // const images = fetchImages('images/').then((images) => images.forEach((image) => imageArray.push(image)))
    //     // console.log('imageArryaAdmin', imageArray)
    //     const reviews = fetchReviews().then((rev)=> console.log('reviews', rev))
    // }, []);