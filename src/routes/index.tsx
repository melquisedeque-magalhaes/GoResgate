import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import ResgateListen from '../pages/ResgateListen';
import ResgatePersonality from '../pages/ResgatePersonality';

const Routes: React.FC = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#005AA5',
                },
                headerTintColor: '#fff',
                headerTitleAlign: 'center',
                headerTitle: 'GoResgate',
            }}>
            <Stack.Screen component={ResgateListen} name="Listen" />
            <Stack.Screen component={ResgatePersonality} name="Personality" />
        </Stack.Navigator>
    );
};

export default Routes;
