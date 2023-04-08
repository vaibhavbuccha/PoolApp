import React from 'react';
import Main from './layout/Main';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/profile';

const Router = [
    {
        path: '/',
        element: <Main />,
        children: [
            // dashboard
            {path: '/', exact: true, element: <Dashboard />},
            // profile
            {path: '/profile', exact: true, element: <Profile />}
        ]
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