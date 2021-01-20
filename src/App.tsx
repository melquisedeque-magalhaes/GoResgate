import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

import Routes from './routes'

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#005AA5" />
        <Routes />
    </NavigationContainer>
);

export default App;
