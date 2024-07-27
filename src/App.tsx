import React from 'react';
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import PinCode from './screens/PinCodeScreen';
import HomeScreen from './screens/HomeScreen';
import NFCReader from './screens/NFCReaderScreen';
import AirbnbScreen from './screens/AirbnbScreen';
import TicketScreen from './screens/TicketScreen';
import ShutdownIOS from './screens/ShutdownIOSScreen';
import ParallaxScreen from './screens/ParallaxScreen';
import DotLoaderScreen from './screens/DotLoaderScreen';
import TogglersScreen from './screens/TogglerIOSScreen';
import DoubleListScreen from './screens/DoubleListScreen';
import Carousel3DScreen from './screens/Carousel3DScreen';
import ProductListScreen from './screens/ProductListScreen';
import FloatingButton from './screens/FloatingButtonScreen';
import {NavigationContainer} from '@react-navigation/native';
import ListWithIndiScreen from './screens/ListWithIndiScreen';
import CustomDrawerScreen from './screens/CustomDrawerScreen';
import DrawerInterpolate from '@components/DrawerInterpolate';
import ValuePickersScreen from './screens/ValuePickersScreen';
import ProgressLoaderScreen from './screens/ProgressLoaderScreen';
import ScrollItemListScreen from './screens/ScrollItemListScreen';
import TranslateSearchIOSScreen from './screens/TranslateSearchIOSScreen';
import CircularProgressBarScreen from './screens/CircularProgressBarScreen';

type TStackList = {
  Home: undefined;
  Parallax: undefined;
  ListWithIndi: undefined;
  DoubleList: undefined;
  Carousel3D: undefined;
  Progress: undefined;
  DotLoader: undefined;
  Togglers: undefined;
  ScrollItem: undefined;
  CustomDrawer: undefined;
  ProductList: undefined;
  DrawerInterpolate: undefined;
  PinCode: undefined;
  Floating: undefined;
  Airbnb: undefined;
  Ticket: undefined;
  ShutdownIOS: undefined;
  NFCReader: undefined;
  TranslateSearchIOS: undefined;
  CircularProgressBar: undefined;
  ValuePickers: undefined;
};

export type THomeNavigationProps = NativeStackNavigationProp<
  TStackList,
  'Home'
>;
export type THomeScreenProps = NativeStackScreenProps<TStackList, 'Home'>;

const Stack = createNativeStackNavigator<TStackList>();

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Parallax" component={ParallaxScreen} />
          <Stack.Screen name="ListWithIndi" component={ListWithIndiScreen} />
          <Stack.Screen name="DoubleList" component={DoubleListScreen} />
          <Stack.Screen name="Carousel3D" component={Carousel3DScreen} />
          <Stack.Screen name="Progress" component={ProgressLoaderScreen} />
          <Stack.Screen name="DotLoader" component={DotLoaderScreen} />
          <Stack.Screen name="Togglers" component={TogglersScreen} />
          <Stack.Screen name="ScrollItem" component={ScrollItemListScreen} />
          <Stack.Screen name="CustomDrawer" component={CustomDrawerScreen} />
          <Stack.Screen
            name="DrawerInterpolate"
            component={DrawerInterpolate}
          />
          <Stack.Screen name="ProductList" component={ProductListScreen} />
          <Stack.Screen name="PinCode" component={PinCode} />
          <Stack.Screen name="Floating" component={FloatingButton} />
          <Stack.Screen name="Airbnb" component={AirbnbScreen} />
          <Stack.Screen name="Ticket" component={TicketScreen} />
          <Stack.Screen name="ShutdownIOS" component={ShutdownIOS} />
          <Stack.Screen name="NFCReader" component={NFCReader} />
          <Stack.Screen
            name="TranslateSearchIOS"
            component={TranslateSearchIOSScreen}
          />
          <Stack.Screen
            name="CircularProgressBar"
            component={CircularProgressBarScreen}
          />
          <Stack.Screen name="ValuePickers" component={ValuePickersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
