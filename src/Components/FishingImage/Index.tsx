import React from 'react';
import { Box, Typography } from '@mui/material';

const FishingImage: React.FC = () => {

    return (
        <Box className='backgroundImage'>
            <Box className='welcomeTextContainer'>
                <Typography className='welcomeMainText'>
                    Создано для рыбаков
                </Typography>
                <Typography className='welcomeDescriptionText'>
                    Ищите турниры, создавайте турнины, побеждайте в турнирах
                </Typography>
            </Box>
            {/* <Box className='chessContainer'>
                    <Chess />
                </Box> */}
        </Box>
    );
}
export default FishingImage