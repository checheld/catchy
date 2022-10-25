import React from 'react';
import Box from '@mui/material/Box';
import './style.css'
import { Typography } from '@mui/material';

const MainPage: React.FC = () => {

    return (
        <Box className='container'>
            <Typography className='title'>Title</Typography>
            <Typography className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            </Typography>
            <img src="../../img/chess.svg" className="backgroundImage" />
        </Box>
    );
}
export default MainPage