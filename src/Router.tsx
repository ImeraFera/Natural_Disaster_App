/* eslint-disable react-native/no-inline-styles */
import { View, Text, ColorValue, Image } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import Sidebar from './Components/Sidebar';
import { DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { createStackNavigator } from '@react-navigation/stack';
import Top_Profile from './Components/Top_Profile';
import Home from './Home';

import GiveHelp from './pages/HelpScreens/Give_Help';
import GetHelp from './pages/HelpScreens/Get_Help';
import HelpDetails from './pages/HelpScreens/Help_Details';
import GiveHelpForm from './pages/HelpScreens/Give_Help_Form';

import Disaster_History from './pages/HomeScreens/Disaster_History';
import Emergency_Aid from './pages/HomeScreens/Emergency_Aid';
import Assembly_Area from './pages/HomeScreens/Assembly_Area';
import Help from './pages/HomeScreens/Help';
import Guide from './pages/HomeScreens/Guide';
import Contact from './pages/HomeScreens/Contact';

import LandslideHistory from './pages/DisasterHistoryScreens/Landslide';
import FloodHistory from './pages/DisasterHistoryScreens/Flood';
import EarthquakeHistory from './pages/DisasterHistoryScreens/Earthquake';
import FireHistory from './pages/DisasterHistoryScreens/Fire';
import AvalancheHistory from './pages/DisasterHistoryScreens/Avalanche';

import Flood from './pages/GuideScreens/Flood';
import Earthquake from './pages/GuideScreens/Earthquake';
import Fire from './pages/GuideScreens/Fire';
import Avalanche from './pages/GuideScreens/Avalanche';
import Landslide from './pages/GuideScreens/Landslide';

import Login from './pages/LoginScreens/Login';
import Register from './pages/RegisterScreen/Register';

import ProfileMain from './pages/ProfileScreens/Profile_Main'; './pages/ProfileScreens/Profile_Main';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileMainScreen" component={ProfileMain} options={{}} />
    </Stack.Navigator>
  );
};


const HelpStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HelpScreen" component={Help} options={{}} />
      <Stack.Screen name="GetHelpScreen" component={GetHelp} options={{}} />
      <Stack.Screen name="GiveHelpScreen" component={GiveHelp} options={{}} />
      <Stack.Screen
        name="HelpDetailsScreen"
        component={HelpDetails}
        options={{}}
      />
      <Stack.Screen
        name="GiveHelpFormScreen"
        component={GiveHelpForm}
        options={{}}
      />
    </Stack.Navigator>
  );
};

const DisasterHistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="DisasterHistoryScreen"
        component={Disaster_History}
        options={{}}
      />
      <Stack.Screen
        name="FloodHistoryScreen"
        component={FloodHistory}
        options={{}}
      />
      <Stack.Screen
        name="EarthquakeHistoryScreen"
        component={EarthquakeHistory}
        options={{}}
      />
      <Stack.Screen
        name="FireHistoryScreen"
        component={FireHistory}
        options={{}}
      />
      <Stack.Screen
        name="AvalancheHistoryScreen"
        component={AvalancheHistory}
        options={{}}
      />
      <Stack.Screen
        name="LandslideHistoryScreen"
        component={LandslideHistory}
        options={{}}
      />
    </Stack.Navigator>
  );
};

const GuideStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="GuideScreen" component={Guide} options={{}} />
      <Stack.Screen name="FloodScreen" component={Flood} options={{}} />
      <Stack.Screen
        name="EarthquakeScreen"
        component={Earthquake}
        options={{}}
      />
      <Stack.Screen name="FireScreen" component={Fire} options={{}} />
      <Stack.Screen name="AvalancheScreen" component={Avalanche} options={{}} />
      <Stack.Screen name="LandslideScreen" component={Landslide} options={{}} />
    </Stack.Navigator>
  );
};

const createIcon = (iconName: string, iconColor: number | ColorValue) => (
  <Icon name={iconName} color={iconColor} size={25} />
);

const flagImg = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Image
      style={{
        width: 70,
        height: 50,
      }}
      source={require('./img/turkiye-bayrak.png')}
    />
  </View>
);

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerRight: flagImg,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: '#E30014',
          },
          drawerStyle: {
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: 'red',
            width: '80%',
          },
          drawerActiveBackgroundColor: 'white',
          drawerActiveTintColor: 'red',
          drawerInactiveBackgroundColor: '#FF9999',
          drawerInactiveTintColor: 'white',
          drawerLabelStyle: {
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
        drawerContent={props => (
          <Top_Profile {...props} username="Ahmet Furkan Sayan" />
        )}>
        <Drawer.Screen
          name="Home_Screen"
          component={Home}
          options={{
            title: 'Anasayfa',
            drawerIcon: ({ focused }) => {
              let iconColor = focused ? 'red' : 'white';
              return createIcon('house', iconColor);
            },
          }}
        />
        <Drawer.Screen
          name="DisasterHistory_Screen"
          component={DisasterHistoryStack}
          options={{
            title: 'Afet Tarihi',
            drawerIcon: ({ focused }) => {
              let iconColor = focused ? 'red' : 'white';
              return createIcon('book-open', iconColor);
            },
          }}
        />
        <Drawer.Screen
          name="Help_Screen"
          component={HelpStack}
          options={{
            title: 'Yardım Et Yardım Al',
            drawerIcon: ({ focused }) => {
              let iconColor = focused ? 'red' : 'white';
              return createIcon('briefcase-medical', iconColor);
            },
          }}
        />
        <Drawer.Screen
          name="ProfileMain_Screen"
          component={ProfileStack}
          options={{
            title: 'Profilim',
            drawerIcon: ({ focused }) => {
              let iconColor = focused ? 'red' : 'white';
              return createIcon('user-gear', iconColor);
            },
          }}
        />
        <Drawer.Screen
          name="Guide_Screen"
          component={GuideStack}
          options={{
            title: 'Afet Rehberi',
            drawerIcon: ({ focused }) => {
              let iconColor = focused ? 'red' : 'white';
              return createIcon('book-atlas', iconColor);
            },
          }}
        />
        <Drawer.Screen
          name="EmergencyAid_Screen"
          component={Emergency_Aid}
          options={{
            title: 'Acil Yardım',
            drawerIcon: ({ focused }) => {
              let iconColor = focused ? 'red' : 'white';
              return createIcon('hand-holding-medical', iconColor);
            },
          }}
        />
        <Drawer.Screen
          name="AssemblyArea_Screen"
          component={Assembly_Area}
          options={{
            title: 'Toplanma Alanları',
            drawerIcon: ({ focused }) => {
              let iconColor = focused ? 'red' : 'white';
              return createIcon('map-location-dot', iconColor);
            },
          }}
        />
        {/* <Drawer.Screen name="Settings" component={Settings} options={{
          title: 'Ayarlar',
          drawerIcon: ({ focused }) => {
            let iconColor = focused ? 'red' : 'white';
            return createIcon('gear', iconColor);
          },
        }} /> */}
        {/* <Drawer.Screen name="Account" component={Account} options={{
          title: 'Hesabım',
          drawerIcon: ({ focused }) => {
            let iconColor = focused ? 'red' : 'white';
            return createIcon('user-gear', iconColor);
          },
        }} /> */}
        <Drawer.Screen
          name="Login_Screen"
          component={Login}
          options={{
            title: 'Giriş Yap',
            drawerIcon: ({ focused }) => {
              let iconColor = focused ? 'red' : 'white';
              return createIcon('arrow-right-to-bracket', iconColor);
            },
          }}
        />
        <Drawer.Screen
          name="Register_Screen"
          component={Register}
          options={{
            title: 'Kayıt Ol',
            drawerIcon: ({ focused }) => {
              let iconColor = focused ? 'red' : 'white';
              return createIcon('user-plus', iconColor);
            },
          }}
        />
        {/* <Drawer.Screen name="Logout" component={Logout} options={{
          title: 'Çıkış Yap',
          drawerIcon: ({ focused }) => {
            let iconColor = focused ? 'red' : 'white';
            return createIcon('arrow-right-from-bracket', iconColor);
          },
        }} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
