import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomInput from '../../Components/CustomInput/Index';
import CustomButton from '../../Components/CustomButton/Index';
import FishingImage from '../../Components/FishingImage/Index';
import Fish from '../../img/Fish';
import './style.css';

const SignUpPage: React.FC = () => {

    const router = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleSignUp = () => {
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
                <Box className='pageForm pageFormSignUp'>
                    <Typography className='greetings'>
                        Добро пожаловать в Catchy
                    </Typography>
                    <Typography className='actionName'>
                        Создать аккаунт
                    </Typography>
                    <Box className='SignUpInputContainer'>
                        <CustomInput item={email}
                            onChange={handleChangeEmail}
                            placeholder={'Введите ваш email'}
                            check={check}
                            label={'Email'} />
                    </Box>
                    <Box className='SignUpInputContainer'>
                        <CustomInput item={password}
                            onChange={handleChangePassword}
                            placeholder={'Введите ваш пароль'}
                            check={check}
                            label={'Пароль'} />
                    </Box>
                    <Box className='confimContainer'>
                        <input type="checkbox" id="checkbox" className='custom-checkbox' />
                        <label htmlFor="checkbox" />
                        <Typography className='confimDescription'>
                            Нажимая кнопку, вы соглашаетесь c условиями политики конфиденциальности
                        </Typography>
                    </Box>
                    <CustomButton text={'Продолжить'}
                        onClick={() => {
                            if (isError) setCheck(true);
                            else (handleSignUp())
                        }}
                    />
                    <CustomButton text={'Назад'}
                        onClick={() => router('/login')}
                    />
                    <Typography className='redirectLinkThin'
                        onClick={() => router('/login')}
                    >
                        У вас есть аккаунт?
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
export default SignUpPage