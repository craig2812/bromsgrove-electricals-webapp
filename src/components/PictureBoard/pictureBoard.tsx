import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useMediaQuery } from '@mui/material';
import { ElectricalServicesRounded, Home } from '@mui/icons-material';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import DeckIcon from '@mui/icons-material/Deck';
import WaterDamageIcon from '@mui/icons-material/WaterDamage';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { pictureDatabase } from './pictureDatabase';
import { ImageFetchObject } from '../../firebase/firebaseController';



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

interface PictureProps {
  width?: number;
  heading?: string;
  images?: ImageFetchObject[];
}

// const pictures = pictureDatabase


export const PictureBoard: React.FunctionComponent<PictureProps> = ({ width, heading, images}) => {
  const isMobileMatch = useMediaQuery("(max-width:600px)");


  return (
    <ImageList sx={{ height: !isMobileMatch ? 450 : null, minWidth: !isMobileMatch ? 500 : null, maxWidth: width }}>
      <ImageListItem key="Subheader" cols={isMobileMatch ? 2 : 3}>
        <ListSubheader component="div" sx={{
          fontWeight: 900,
          textAlign: 'center',
          fontSize: 'large'
        }}>{heading}</ListSubheader>
      </ImageListItem>
        {images?.map((item) => (
        <ImageListItem key={item.name+Math.floor(Math.random() * 100000)}>

          <img
            src={`${item.url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <a href={item.category && `/${item.category}`}>
            <ImageListItemBar
              title={item.name}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.name}`}
                >
                  {chooseIcon(item.category)}              
                  </IconButton>
              }
            /></a>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1526131424827-a96615888a26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9zZSUyMHRhcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
    title: 'Outdoor Tap',
    // featured: true,
    redirect: 'water'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Domestic',
    redirect: 'domestic'
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Commercial',
    redirect: 'commercial'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Charging',
    redirect: 'charging'
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Garden Work',
    redirect: 'garden'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Testing',
    redirect: 'testing',
  }
];