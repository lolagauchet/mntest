import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
// Screens 
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage';
import NewsDetails from '../pages/NewsDetails';

const AppRoutes = () => (

    <Router>
        <Stack key="root">
            <Scene key="home" hideNavBar component={HomePage} title="Dernières actualités" initial />
            <Scene key="userDetail" hideNavBar component={UserPage} />
            <Scene key="newsDetail" component={NewsDetails} title="Revenir à la liste" />
        </Stack>
    </Router>

);

export default AppRoutes;
