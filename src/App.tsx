import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import MainPage from './Pages/MainPage/Index';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage/Index';
import ForgotPasswordPage from './Pages/ForgotPasswordPage/Index';
import ResetPasswordPage from './Pages/ResetPasswordPage/Index';
import AboutPage from './Pages/AboutPage/Index';
import CommunitiesPage from './Pages/CommunitiesPage/Index';
import PricingPage from './Pages/PricingPage/Index';
import TournamentsPage from './Pages/TournamentsPage/Index';
import NavBar from './Components/NavBar/Index';
import './App.css';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
          <Route path="/resetpassword" element={<ResetPasswordPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/communities" element={<CommunitiesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
export default App;

