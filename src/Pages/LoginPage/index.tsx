import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomInput from '../../Components/CustomInput/Index';
import CustomButton from '../../Components/CustomButton/Index';
import FishingImage from '../../Components/FishingImage/Index';
import Fish from '../../img/Fish';
import './style.css';

const LoginPage: React.FC = () => {

    const router = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleLogIn = () => {
        //dispatch({ type: loginActions.LOGIN_REQUEST, payload: { 'email': email, 'password': password } });
        setEmail('');
        setPassword('');
    }

    const handleChangeEmail = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = ev;
        setEmail(value);
    };

    const handleChangePassword = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = ev;
        setPassword(value);
    };

    useEffect(() => {
        setIsError(false);
        (email === '' || password === '') && setIsError(true)
    }, [email, password]);

    return (
        <Box className='pageContainer'>
            <Box className='pageFormContainer'>
                <Box className='fishImgContainer'>
                    <Fish />
                </Box>
                <Box className='pageForm pageFormLogin'>
                    <Typography className='greetings'>
                        Добро пожаловать в Catchy
                    </Typography>
                    <Typography className='actionName'>
                        Войти
                    </Typography>
                    <Box className='loginInputContainer'>
                        <CustomInput item={email}
                            onChange={handleChangeEmail}
                            placeholder={'Введите ваш email'}
                            check={check}
                            label={'Email'} />
                    </Box>
                    <Box className='loginInputContainer'>
                        <CustomInput item={password}
                            onChange={handleChangePassword}
                            placeholder={'Введите ваш пароль'}
                            check={check}
                            label={'Пароль'} />
                    </Box>
                    <Typography className='forgotPasswordLink'
                        onClick={() => router('/forgotpassword')}
                    >
                        Забыли пароль?
                    </Typography>
                    <CustomButton text={'Продолжить'}
                        onClick={() => {
                            if (isError) setCheck(true);
                            else (handleLogIn())
                        }}
                    />
                    <Typography className='redirectLinkThin'
                        onClick={() => router('/signup')}
                    >
                        Нет аккаунта?
                        <span className='redirectLinkBold'>
                            Зарегистрироваться
                        </span>
                    </Typography>
                </Box>
            </Box>
            <FishingImage />
        </Box>
    );
}
export default LoginPage