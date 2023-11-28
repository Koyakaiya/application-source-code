/**
 * @author Gerald Maduabuchi @ - 2023
 * Stack Navigator Module.
 * This is a reusable stack navigator function to handle routing.
 * This particular stack facilitates the home navigation.
 */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as React from 'react';
import { PaymentOption } from '../screens/Payment Screen/PaymentOptionsScreen';
import { SelectBundle } from '../screens/Payment Screen/SelectBundle';
import { QuizHomePage } from '../screens/Quiz screens/Guizhomescreen';
import HomeStacks from './HomeStack';
import CategoryScreen from '../screens/Search Result Screem/CategoryScreen';
import LettersMenuScreen from '../screens/Search Result Screem/Search Result/LettersMenuScreen';
import SearchResultScreen from '../screens/Search Result Screem/Search Result/SearchDetailsScreen';
import SearchResult from '../screens/Search Result Screem/Search Result/SearchResult';
import CategoryResult from '../screens/Search Result Screem/Search Result/CategoryResult';
import AboutScreen from '../screens/Home Screen/SettingScreens/About';
import PrivacyAndSecurityScreen from '../screens/Home Screen/SettingScreens/PrivacyAndSecurity';
import HelpAndSupportScreen from '../screens/Home Screen/SettingScreens/HelpAndSupport';
import A from '../screens/Search Result Screem/letters/A';
import B from '../screens/Search Result Screem/letters/B';
import C from '../screens/Search Result Screem/letters/C';
import D from '../screens/Search Result Screem/letters/D';
import E from '../screens/Search Result Screem/letters/E';
import F from '../screens/Search Result Screem/letters/F';
import G from '../screens/Search Result Screem/letters/G';
import I from '../screens/Search Result Screem/letters/I';
import J from '../screens/Search Result Screem/letters/J';
import K from '../screens/Search Result Screem/letters/K';
import L from '../screens/Search Result Screem/letters/L';
import M from '../screens/Search Result Screem/letters/M';
import N from '../screens/Search Result Screem/letters/N';
import O from '../screens/Search Result Screem/letters/O';
import P from '../screens/Search Result Screem/letters/P';
import Q from '../screens/Search Result Screem/letters/Q';
import R from '../screens/Search Result Screem/letters/R';
import S from '../screens/Search Result Screem/letters/S';
import T from '../screens/Search Result Screem/letters/T';
import U from '../screens/Search Result Screem/letters/U';
import V from '../screens/Search Result Screem/letters/V';
import W from '../screens/Search Result Screem/letters/W';
import X from '../screens/Search Result Screem/letters/X';
import Y from '../screens/Search Result Screem/letters/Y';
import Z from '../screens/Search Result Screem/letters/Z';
import H from '../screens/Search Result Screem/letters/H';
import Details from '../screens/Search Result Screem/letters/Details';
import AccountScreen from '../screens/Home Screen/SettingScreens/Account';

/**
 * Define the screens here as RootStackParamList
 * This ensures that your stack.screen name doesn't return
 * The expected type comes from property 'name' which is declared
 * here on type 'IntrinsicAttributes & RouteConfig<RootStackParamList,
 * "yourscreen", StackNavigationState<ParamListBase>,
 * NativeStackNavigationOptions, NativeStackNavigationEventMap>'
 */
type RootStackParamList = {
  PaymentOptionsScreen: undefined;
  SelectBundle: undefined;
  HomeStack: undefined;
  QuizHomePage: undefined;
  CategoryScreen: undefined;
  CategoryResult: undefined;
  LettersMenuScreen: undefined;
  SearchResultScreen: undefined;
  SearchResult: undefined;
  About: undefined;
  PrivacyAndSecurity: undefined;
  HelpAndSupport: undefined;
  AccountScreen: undefined;
  A: undefined;
  B: undefined;
  C: undefined;
  D: undefined;
  E: undefined;
  F: undefined;
  G: undefined;
  H: undefined;
  I: undefined;
  J: undefined;
  K: undefined;
  L: undefined;
  M: undefined;
  N: undefined;
  O: undefined;
  P: undefined;
  Q: undefined;
  R: undefined;
  S: undefined;
  T: undefined;
  U: undefined;
  V: undefined;
  W: undefined;
  X: undefined;
  Y: undefined;
  Z: undefined;
  HomeScreen: undefined;
  ProfileScreen: undefined;
  SettingScreen: undefined;
  SearchScreen: undefined;
  ResponseScreen: undefined;
  QuizHome: undefined;
  //
  Details: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 *
 * @author Gerald Maduabuchi
 */

export const MainStack = (): JSX.Element => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        presentation: 'modal',
        animationTypeForReplace: 'push',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="HomeStack" component={HomeStacks} />
      <Stack.Screen name="QuizHomePage" component={QuizHomePage} />
      <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
      <Stack.Screen name="CategoryResult" component={CategoryResult} />
      <Stack.Screen name="LettersMenuScreen" component={LettersMenuScreen} />
      <Stack.Screen name="ResponseScreen" component={SearchResultScreen} />
      <Stack.Screen name="SearchResult" component={SearchResult} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen
        name="PrivacyAndSecurity"
        component={PrivacyAndSecurityScreen}
      />
      <Stack.Screen name="HelpAndSupport" component={HelpAndSupportScreen} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      {/* Letters */}
      <Stack.Screen name="A" component={A} />
      <Stack.Screen name="B" component={B} />
      <Stack.Screen name="C" component={C} />
      <Stack.Screen name="D" component={D} />
      <Stack.Screen name="E" component={E} />
      <Stack.Screen name="F" component={F} />
      <Stack.Screen name="H" component={H} />
      <Stack.Screen name="G" component={G} />
      <Stack.Screen name="I" component={I} />
      <Stack.Screen name="J" component={J} />
      <Stack.Screen name="K" component={K} />
      <Stack.Screen name="L" component={L} />
      <Stack.Screen name="M" component={M} />
      <Stack.Screen name="N" component={N} />
      <Stack.Screen name="O" component={O} />
      <Stack.Screen name="P" component={P} />
      <Stack.Screen name="Q" component={Q} />
      <Stack.Screen name="R" component={R} />
      <Stack.Screen name="S" component={S} />
      <Stack.Screen name="T" component={T} />
      <Stack.Screen name="U" component={U} />
      <Stack.Screen name="V" component={V} />
      <Stack.Screen name="W" component={W} />
      <Stack.Screen name="X" component={X} />
      <Stack.Screen name="Y" component={Y} />
      <Stack.Screen name="Z" component={Z} />
      {/*  */}
      <Stack.Screen name="QuizHome" component={QuizHomePage} />
      {/*  */}
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
