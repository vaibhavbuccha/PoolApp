import React from 'react';
import Main from './layout/Main';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';

const Router = [
    {
        path: '/',
        element: <Main />,
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
]

export default Router;