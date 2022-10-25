import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Box, Button, List, ListItem, Typography } from '@mui/material';
import NavBarLink from './Components/NavBarLink';
import Logo from '../../img/logo';
import './style.css';

const NavBar: React.FC = () => {

    const router = useNavigate();

    const links = [
        { text: 'about', link: '/about' },
        { text: 'tournaments', link: '/tournaments' },
        { text: 'communities', link: '/communities' },
        { text: 'pricing', link: '/pricing' },
    ]

    return (
        <AppBar position="static" className='appBarContainer'>
            <Box className='logoContainer' >
                <Logo />
                <Typography className='appBarName'>
                    Catchy
                </Typography>
            </Box>
            <List className='appBarList'>
                {
                    links.map((x, i) => <NavBarLink text={x.text} link={x.link} key={i} />)
                }
                <ListItem sx={{ padding: 0 }}>
                    <Button variant="contained" className='loginButton' onClick={() => router('/login')}>sign in</Button>
                </ListItem>
            </List>
        </AppBar>
    );
}
export default NavBar