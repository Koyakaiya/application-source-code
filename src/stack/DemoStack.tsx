/**
 * @author Gerald Maduabuchi @ - 2023
 * Stack Navigator Module.
 * This is a reusable stack navigator function to handle routing.
 * This particular stack facilitates the authentication
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { SplashScreen } from '../screens/Authentication/SplashScreen';
import { DemoLandingScreen } from '../demo/DemoLandingPage';
import DemoSearchResult from '../demo/DemoSearchScreen';
import Algorithm from '../demo/Algorithm';
import AddressBar from '../demo/AddressBar';
import Contents from '../demo/Contents';
import CoverPage from '../demo/Coverpage';
import Firewall from '../demo/Firewall';
import Flier from '../demo/Flier';
import FlightMode from '../demo/Flightmode';
import FloppyDisk from '../demo/FloppyDisk';
import HardDisk from '../demo/HardDisk';
import Account from '../demo/Account';
import Cookies from '../demo/Cookies';

/**
 * Define the screens here as RootStackParamList
 * This ensures that your stack.screen name doesn't return
 * The expected type comes from property 'name' which is declared
 * here on type 'IntrinsicAttributes & RouteConfig<RootStackParamList,
 * "yourscreen", StackNavigationState<ParamListBase>,
 * NativeStackNavigationOptions, NativeStackNavigationEventMap>'
 */
type RootStackParamList = {
    SplashScreen: undefined;
    DemoLandingScreen: undefined;
    DemoSearchResult: undefined;
    Account: undefined;
    Algorithm: undefined;
    AddressBar: undefined;
    Contents: undefined;
    Cookies: undefined;
    CoverPage: undefined;
    Firewall: undefined;
    Flier: undefined;
    FlightMode: undefined;
    FloppyDisk: undefined;
    HardDisk: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 *
 * @author Gerald Maduabuchi
 */

export const DemoStack = (): JSX.Element => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    presentation: 'modal',
                    animationTypeForReplace: 'push',
                    animation: 'slide_from_right',
                }}>
                <>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                    <Stack.Screen
                        name="DemoLandingScreen"
                        component={DemoLandingScreen}
                    />
                    <Stack.Screen name="DemoSearchResult" component={DemoSearchResult} />
                    <Stack.Screen name="Algorithm" component={Algorithm} />
                    <Stack.Screen name="AddressBar" component={AddressBar} />
                    <Stack.Screen name="Contents" component={Contents} />
                    <Stack.Screen name="Cookies" component={Cookies} />
                    <Stack.Screen name="CoverPage" component={CoverPage} />
                    <Stack.Screen name="Firewall" component={Firewall} />
                    <Stack.Screen name="Flier" component={Flier} />
                    <Stack.Screen name="FlightMode" component={FlightMode} />
                    <Stack.Screen name="FloppyDisk" component={FloppyDisk} />
                    <Stack.Screen name="HardDisk" component={HardDisk} />
                    <Stack.Screen name="Account" component={Account} />
                </>
            </Stack.Navigator>
        </NavigationContainer>
    );
};
