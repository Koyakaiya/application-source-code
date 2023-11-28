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
import { LandingScreen } from '../screens/Authentication/LandingScreen';
import { ForgotPassword } from '../screens/Authentication/ForgotPasswordScreen';
import { OauthSignup } from '../screens/Authentication/OauthSignup';
import { SignupScreen } from '../screens/Authentication/SignupScreen';
import { ResetPasswordScreen } from '../screens/Authentication/ResetPasswordScreen';
import { SelectBundle } from '../screens/Payment Screen/SelectBundle';
import { MainStack } from './MainStack';
import { PaymentPlanScreen } from '../screens/Payment Screen/PaymentPlanScreen';
import { PaymentOption } from '../screens/Payment Screen/PaymentOptionsScreen';
import OTPScreen from '../screens/Authentication/OTP';
import PosPayment from '../screens/Payment Screen/PosPayment';
import { LoginScreen } from '../screens/Authentication/LoginScreen';
import WelcomeScreen from '../screens/Authentication/WelcomeScreen';
import { PaymentOptionOneThousand } from '../screens/Payment Screen/PaymentOptionScreen1k';
import SetupProfile from '../screens/Authentication/SetupProfile';

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
  LandingScreen: undefined;
  ForgotPassword: undefined;
  OauthSignup: undefined;
  SignupScreen: undefined;
  ResetPassword: undefined;
  UserHome: undefined;
  PaymentPlan: undefined;
  SelectBundle: undefined;
  OTPScreen: undefined;
  PaymentOptionsScreen: undefined;
  PosPaymentScreen: undefined;
  LoginScreen: undefined;
  WelcomeScreen: undefined;
  PaymentOptionOneThousand: undefined;
  SetupProfileScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 *
 * @author Gerald Maduabuchi
 */

export const AuthStack = (): JSX.Element => {
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
          <Stack.Screen name="LandingScreen" component={LandingScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="OauthSignup" component={OauthSignup} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="SetupProfileScreen" component={SetupProfile} />
          <Stack.Screen name="OTPScreen" component={OTPScreen} />
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
          <Stack.Screen name="UserHome" component={MainStack} />
          <Stack.Screen name="PaymentPlan" component={PaymentPlanScreen} />
          <Stack.Screen name="SelectBundle" component={SelectBundle} />
          <Stack.Screen name="PaymentOptionsScreen" component={PaymentOption} />
          <Stack.Screen
            name="PaymentOptionOneThousand"
            component={PaymentOptionOneThousand}
          />
          <Stack.Screen name="PosPaymentScreen" component={PosPayment} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
