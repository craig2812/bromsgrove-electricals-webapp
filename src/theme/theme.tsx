import { createTheme } from "@mui/material";
import { deepOrange, blue, grey } from '@mui/material/colors';

export const theme = createTheme({
  
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#006D77',
        light: '#83C5BE',
        dark: '#E29578', 
        darker:'#FFDDD2' ,
        contrastText:'#EDF6F9', 
      },
      neutral: {
        main: grey[500],
        contrastText: '#fff',
      },
      secondary: {
        main: '#308bb4',
      },
      button: {
        main: '#006D77',
        light: '#83C5BE',
        dark: '#EDF6F9', 
        darker:'#FFDDD2' ,
        contrastText:'#EDF6F9', 
      },
      navBar:{
        main: '#006D77',
        light: '#83C5BE',
        dark: '#EDF6F9', 
        darker:'#FFDDD2' ,
        contrastText:'#EDF6F9', 
      },
      backdrop:{
        main: '#006D77',
        light: '#83C5BE',
        dark: '#EDF6F9', 
        darker:'#FFDDD2' ,
        contrastText:'#EDF6F9', 
      }
    },
  });
  declare module '@mui/material/styles' {
      interface Theme {
        status: {
          danger: React.CSSProperties['color'];
        };
      }
    
      interface Palette {
        neutral: Palette['primary'];
        secondary: Palette['primary'];
        button: Palette['primary'];
        backdrop: Palette['primary'];
        navBar: Palette['primary'];
      }
    
      interface PaletteOptions {
        neutral: PaletteOptions['primary'];
        button: PaletteOptions['primary'];
        backdrop: Palette['primary'];
        navBar: Palette['primary'];
      }
    
      interface PaletteColor {
        darker?: string;
      }
    
      interface SimplePaletteColorOptions {
        darker?: string;
      }
    
      interface ThemeOptions {
        status: {
          danger: React.CSSProperties['color'];
        };
      }
    }