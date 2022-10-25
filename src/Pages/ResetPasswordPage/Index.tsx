import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomInput from '../../Components/CustomInput/Index';
import CustomButton from '../../Components/CustomButton/Index';
import FishingImage from '../../Components/FishingImage/Index';
import Fish from '../../img/Fish';
import './style.css';

const ResetPasswordPage: React.FC = () => {

    const router = useNavigate();

    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [check, setCheck] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChangePassword = () => {
        //dispatch({ type: loginActions.LOGIN_REQUEST, payload: { 'email': email, 'password': password } });
        setRepeatPassword('');
        setPassword('');
    }

    const handleChangeRepeatPassword = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = ev;
        setRepeatPassword(value);
    };

    const handleChangePass = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: { value },
        } = ev;
        setPassword(value);
    };

    useEffect(() => {
        setIsError(false);
        (repeatPassword === '' || password === '') && setIsError(true)
    }, [repeatPassword, password]);

    return (
        <Box className='pageContainer'>
            <Box className='pageFormContainer'>
                <Box className='fishImgContainer'>
                    <Fish />
                </Box>
                <Box className='pageForm pageFormResetPassword'>
                    <Typography className='greetings'>
                        Добро пожаловать в Catchy
                    </Typography>
                    <Typography className='actionName'>
                        Сбросить пароль
                    </Typography>
                    <Box className='forgotPasswordInputContainer'>
                        <CustomInput item={password}
                            onChange={handleChangePass}
                            placeholder={'Пароль'}
                            check={check}
                            label={'Новый пароль'} />
                    </Box>
                    <Box className='forgotPasswordInputContainer'>
                        <CustomInput item={repeatPassword}
                            onChange={handleChangeRepeatPassword}
                            placeholder={'Повторите пароль'}
                            check={check}
                            label={'Повторите новый пароль'} />
                    </Box>
                    <CustomButton text={'Продолжить'}
                        onClick={() => {
                            if (isError) setCheck(true);
                            else (handleChangePassword())
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
export default ResetPasswordPage