import { NavigationContainer } from '@react-navigation/native';
import React = require('react');
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home Screen';
import ProfileScreen from '../screens/Home Screen/ProfileScreen';
import SearchScreen from '../screens/Home Screen/SearchScreen';
import SettingScreen from '../screens/Home Screen/SettingScreen';
import NotificationsScreen from '../screens/Home Screen/NotificationsScreen';
import HomeStackScreen from './HomeStacks';
const Tab = createBottomTabNavigator();

export default function HomeStacks() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarBadgeStyle: {},
                tabBarStyle: {
                    height: '8%',
                    backgroundColor: 'white',
                    borderTopLeftRadius: 15,
                    borderTopRightRadius: 15,
                    position: 'absolute',
                    overflow: 'hidden',
                    paddingTop: '3%',
                },
                tabBarOptions: {
                    style: {
                        backgroundColor: '',
                    },
                    showLabel: true,
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    size = 25;

                    if (route.name === 'Home') {
                        return <Ionicons name="home-outline" size={28} color="#2460A7" />;
                    } else if (route.name === 'Profile') {
                        return <Ionicons name="person-outline" size={28} color="#2460A7" />;
                    } else if (route.name === 'Search') {
                        return <Ionicons name="search-outline" size={28} color="#2460A7" />;
                    } else if (route.name === 'Notifications') {
                        return (
                            <Ionicons
                                name="notifications-outline"
                                size={28}
                                color="#2460A7"
                            />
                        );
                    } else if (route.name === 'Settings') {
                        return (
                            <Ionicons name="settings-outline" size={28} color="#2460A7" />
                        );
                    }
                },

                tabBarActiveTintColor: '#000000',
                tabBarInactiveTintColor: '#36454F',
            })}
            initialRouteName="Home">
            <Tab.Screen
                name="Home"
                options={{ tabBarLabel: '' }}
                component={HomeStackScreen}
            />
            <Tab.Screen
                name="Profile"
                options={{ tabBarLabel: '' }}
                component={ProfileScreen}
            />
            <Tab.Screen
                name="Search"
                options={{ tabBarLabel: '' }}
                component={SearchScreen}
            />
            <Tab.Screen
                name="Settings"
                options={{ tabBarLabel: '' }}
                component={SettingScreen}
            />
        </Tab.Navigator>
    );
}
