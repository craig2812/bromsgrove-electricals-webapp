import * as React from 'react';
import Backdrop, { BackdropRoot } from '@mui/material/Backdrop';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {theme} from '../../theme/theme'

  

export function backdropItem(children: JSX.Element, name: string) {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div>
                <ThemeProvider theme={theme}>
            <Button onClick={handleOpen} sx={{ color: "white", ":hover": {
      bgcolor: theme.palette.navBar.light,
      color: theme.palette.navBar.contrastText
    }}} 
              size="large"
              variant="text"
              >{name}</Button>
            <Backdrop
                sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                {children}
            </Backdrop>
            </ThemeProvider>
        </div>
    )
}