import * as React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { ArrowCircleRightOutlined, ElectricalServicesRounded, Home } from '@mui/icons-material';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import DeckIcon from '@mui/icons-material/Deck';
import ArrowCircleLeftOutlined from '@mui/icons-material/ArrowCircleLeftOutlined'
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { pictureDatabase } from './pictureDatabase';
import { fetchImages, fetchReviews, ImageFetchObject } from '../../firebase/firebaseController';
import './gallery.css';
import { useEffect, useRef, useState } from 'react';

function chooseIcon(redirect?: string) {
  switch (redirect) {
    case 'domestic':
      return <HomeIcon />;
    case 'charging':
      return <ElectricCarIcon />
    case 'commercial':
      return <LocationCityIcon />
    case 'testing':
      return <ElectricalServicesRounded />
    case 'water':
      return <WaterDamageIcon />
    case 'garden':
      return <DeckIcon />
    default:
      return <InfoIcon />
  }
}

interface GaleryProps {
  folderPath?: string
}

export const Gallery: React.FC<GaleryProps> = ({ folderPath = 'images/' }) => {
  const imageArray: ImageFetchObject[] = []
  const [images, setImages] = useState(imageArray);

  const getImagesGallery = async () => {
    fetchImages(folderPath).then((imageArray) => setImages(imageArray));
  }
  React.useEffect(() => {
    getImagesGallery()
  }, [])

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= scrollRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollRef.current.offsetWidth;
    }
  };

  useEffect(() => {
    const handleScroll = () => {

      scrollRef.current &&
        scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
        scrollRef.current.scrollWidth

    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div>
      <div className="gallery-container" ref={scrollRef}>
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image.url} alt={image.name} className="image" />
            <div className="category-footer">
              {chooseIcon(image.category)}
              <a href={`/${image.category}`}>{image.category?.toUpperCase()}</a>
            </div>
          </div>

        ))}
      </div>
      <div className="scroll-buttons">
        <button className="scroll-button" onClick={scrollLeft}>
          <ArrowCircleLeftOutlined/>
        </button>
        <button className="scroll-button" onClick={scrollRight}>
        <ArrowCircleRightOutlined/>
        </button>
      </div>
    </div>
  );
};

