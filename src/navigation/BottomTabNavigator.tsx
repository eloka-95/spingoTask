import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Svg, { Path } from 'react-native-svg';
import Home from '../screen/home/home';
import Terms from '../screen/terms';
import Calculate from '../screen/calculate';
import List from '../screen/list';
import SVGComponent from '../assets/svgs/home';
import SVGComponenta from '../assets/svgs/list';
import SVGComponentb from '../assets/svgs/todo';
import SVGComponentc from '../assets/svgs/scale';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let IconComponent;

                    if (route.name === 'Home') {
                        IconComponent = <SVGComponent width={size} height={size}  />;
                    } else if (route.name === 'Terms') {
                        IconComponent = <SVGComponentb width={size} height={size}  />;
                    } else if (route.name === 'Calculate') {
                        IconComponent = <SVGComponenta width={size} height={size}  />;
                    } else if (route.name === 'List') {
                        IconComponent = <SVGComponentc width={size} height={size}  />;
                    } else {
                        IconComponent = (
                            <Svg width={size} height={size} fill={color}>
                                <Path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 18a8 8 0 100-16 8 8 0 000 16zM10.5 6v5H6v2h4.5v5h2v-5H18v-2h-5.5V6h-2z" />
                            </Svg>
                        ); // Placeholder SVG Path
                    }

                    return IconComponent;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#00A6FB',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Home',
                }}
            />
            <Tab.Screen
                name="Terms"
                component={Terms}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Terms',
                }}
            />
            <Tab.Screen
                name="Calculate"
                component={Calculate}
                options={{
                    headerTitleAlign: 'center',
                    title: 'Calculate',
                }}
            />
            <Tab.Screen
                name="List"
                component={List}
                options={{
                    headerTitleAlign: 'center',
                    title: 'List',
                }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;
