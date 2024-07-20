import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomTabs from './src/navigation/BottomTabNavigator';
import Onboarding from './src/screen/onboarding/Onboarding';

const Stack = createStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{
              title: 'Onboarding',
              headerShown: false // Hide header for the Onboarding screen if necessary
            }}
          />
          <Stack.Screen
            name="Home"
            component={BottomTabs} // Use BottomTabs for the Home screen
            options={{
              headerShown: false, // Hide header for BottomTabs if necessary
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
