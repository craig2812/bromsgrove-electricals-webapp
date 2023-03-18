import {AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem, Link} from '@mui/material'
import MyIcon from '@mui/icons-material/ElectricMeter'
import React, {useState} from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const NavBar = () => {

    const pages = ['About', 'Contact'];
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget)
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo' href={'/'}>
                    <MyIcon/>
                </IconButton>
                <Typography variant='h6' component={'div'} sx={{flexGrow: 1}}>
                    Bromsgrove Electricals
                </Typography>
                <Stack direction={'row'} spacing={2}>
                    {pages.map((page) => (
                        <Button key={page} color={'inherit'} href={`/${page}`}>{page}</Button>
                    ))}
                    <Button onClick={handleClick} color={'inherit'} id={'service-button'}
                            endIcon={<KeyboardArrowDownIcon/>}>Services</Button>
                </Stack>
                <Menu id={'resources-menu'} open={open} anchorEl={anchorEl} onClose={handleClose}
                      MenuListProps={{
                          "aria-labelledby": 'resources-button',
                      }}
                      anchorOrigin={{vertical: "bottom", horizontal: 'right'}}
                      transformOrigin={{vertical: 'top', horizontal: 'right'}}>
                              <MenuItem onClick={handleClose} component={Link} href="/domestic">Domestic Electrical Work</MenuItem>
                              <MenuItem onClick={handleClose} component={Link} href="/commercial">Commerical Electrical Work</MenuItem>
                              <MenuItem onClick={handleClose} component={Link} href="/testing">Electrical Testing</MenuItem>
                              <MenuItem divider onClick={handleClose} component={Link} href="/charging">Electric Vehicle Charging Points</MenuItem>
                              <MenuItem onClick={handleClose} component={Link} href="/services">All Services</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}