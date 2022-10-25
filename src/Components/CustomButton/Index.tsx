import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import './style.css';

interface IButtonProps {
    text: string,
    onClick: () => void
}

const CustomButton: React.FC<IButtonProps> = ({ text, onClick }) => {

    const [className, setClassName] = useState<string>('');

    useEffect(() => {
        text === 'Назад' ? setClassName('secondaryClass') : setClassName('mainClass')
    }, []);

    return (
        <Button variant="contained"
            onClick={onClick}
            className={className}
        >
            {text}
        </Button>
    );
}
export default CustomButton