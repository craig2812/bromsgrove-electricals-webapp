import { createTheme } from "@mui/material";
import { deepOrange, blue, grey } from '@mui/material/colors';

export const theme = createTheme({
  
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#f68d1f',
        light: grey[100],
        dark: grey[700], 
        darker:grey[900] ,
        contrastText:blue[400], 
      },
      neutral: {
        main: grey[500],
        contrastText: '#fff',
      },
      secondary: {
        main: '#308bb4',
      },
      button: {
        main: grey[200],
        dark: grey[600],
        light: grey[300],
        contrastText: grey[600]
      },
      navBar:{
        main: blue[400],
        light: blue[300],
        dark: blue[800],
        contrastText: grey[200]
      },
      backdrop:{
        main: blue[500],
        light: blue[300],
        dark: blue[800],
        contrastText: grey[200]
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