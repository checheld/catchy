import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomInput from '../../Components/CustomInput/Index';
import CustomButton from '../../Components/CustomButton/Index';
import FishingImage from '../../Components/FishingImage/Index';
import Fish from '../../img/Fish';
import './style.css';

const ForgotPasswordPage: React.FC = () => {

    const router = useNavigate();

    const [email, setEmail] = useState('');
    const [check, setCheck] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleLogin = () => {
        //dispatch({ type: loginActions.LOGIN_REQUEST, payload: { 'email': email, 'password': password } });
        setEmail('');
    }

    const handleChangeEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = ev;
        setEmail(value);
    };

    useEffect(() => {
        setIsError(false);
        (email === '') && setIsError(true)
    }, [email]);

    return (
        <Box className='pageContainer'>
            <Box className='pageFormContainer'>
                <Box className='fishImgContainer'>
                    <Fish />
                </Box>
                <Box className='pageForm pageFormForgotPassword'>
                    <Typography className='greetings'>
                        Добро пожаловать в Catchy
                    </Typography>
                    <Typography className='actionName'>
                        Забыли пароль?
                    </Typography>
                    <Box className='forgotPasswordContainer'>
                        <CustomInput item={email}
                            onChange={handleChangeEmail}
                            placeholder={'Введите ваш email'}
                            check={check}
                            label={'Email'} />
                    </Box>
                    <CustomButton text={'Отправить'}
                        onClick={() => {
                            if (isError) setCheck(true);
                            else (handleLogin())
                        }}
                    />
                    <CustomButton text={'Назад'}
                        onClick={() => router('/login')}
                    />
                    <Typography className='redirectLinkThin'
                        onClick={() => router('/login')}
                    >
                        Есть аккаунт?
                        <span className='redirectLinkBold'>
                            Войти
                        </span>
                    </Typography>
                </Box>
            </Box>
            <FishingImage />
        </Box>
    );
}
export default ForgotPasswordPage