import {View, Text, ColorValue, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome6';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';

import GiveHelp from './pages/HelpScreens/Give_Help';
import GetHelp from './pages/HelpScreens/Get_Help';
import HelpDetails from './pages/HelpScreens/Help_Details';
import MissingDeclaration from './pages/HelpScreens/Missing_Declaration';
import DeclarationSettings from './pages/HelpScreens/Declaration_Settings';
import DeclarationDetails from './pages/HelpScreens/Declaration_Details';

import Disaster_History from './pages/HomeScreens/Disaster_History';
import Emergency_Aid from './pages/HomeScreens/Emergency_Aid';
import Assembly_Area from './pages/HomeScreens/Assembly_Area';
import Help from './pages/HomeScreens/Help';
import Guide from './pages/HomeScreens/Guide';

import HistoryDetails from './pages/DisasterHistoryScreens/History_Details';
import LandslideHistory from './pages/DisasterHistoryScreens/Landslide';
import OtherHistory from './pages/DisasterHistoryScreens/Other';
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

import QueryBuild from './pages/GetInfoScreens/Query_Build';

import ProfileMain from './pages/ProfileScreens/Profile_Main';
import Custom_Drawer_Content from './Components/Custom_Drawer_Content';
import Toast from 'react-native-toast-message';

import {useSelector} from 'react-redux';
import All_Reports from './pages/GetInfoScreens/All_Reports';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="ProfileMainScreen"
        component={ProfileMain}
        options={{}}
      />
    </Stack.Navigator>
  );
};

const GetInfoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="QueryBuild_Screen"
        component={QueryBuild}
        options={{}}
      />
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
        name="DeclarationSettingsScreen"
        component={DeclarationSettings}
        options={{}}
      />
      <Stack.Screen
        name="MissingDeclarationScreen"
        component={MissingDeclaration}
        options={{}}
      />
      <Stack.Screen
        name="DeclarationDetailsScreen"
        component={DeclarationDetails}
        options={{}}
      />
      <Stack.Screen
        name="HelpDetailsScreen"
        component={HelpDetails}
        options={{}}
      />
      {/* <Stack.Screen
        name="GiveHelpFormScreen"
        component={GiveHelpForm}
        options={{}}
      /> */}
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
      <Stack.Screen
        name="OtherHistoryScreen"
        component={OtherHistory}
        options={{}}
      />
      <Stack.Screen
        name="HistoryDetailsScreen"
        component={HistoryDetails}
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

const Router = () => {
  const isAuth = useSelector(({user}) => user.isAuth);
  const role = useSelector(({user}) => user.role);

  return (
    <>
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
              backgroundColor: '#E30014',
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
            <>
              <Custom_Drawer_Content {...props} />
            </>
          )}>
          <Drawer.Screen
            name="Home_Screen"
            component={Home}
            options={{
              title: 'Anasayfa',
              drawerIcon: ({focused}) => {
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
              drawerIcon: ({focused}) => {
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
              drawerIcon: ({focused}) => {
                let iconColor = focused ? 'red' : 'white';
                return createIcon('briefcase-medical', iconColor);
              },
            }}
          />

          <Drawer.Screen
            name="Guide_Screen"
            component={GuideStack}
            options={{
              title: 'Afet Rehberi',
              drawerIcon: ({focused}) => {
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
              drawerIcon: ({focused}) => {
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
              drawerIcon: ({focused}) => {
                let iconColor = focused ? 'red' : 'white';
                return createIcon('map-location-dot', iconColor);
              },
            }}
          />
          <Drawer.Screen
            name="GetInfo_Screen"
            component={GetInfoStack}
            options={{
              title: 'Hasar Sorgula',
              drawerIcon: ({focused}) => {
                let iconColor = focused ? 'red' : 'white';
                return createIcon('circle-info', iconColor);
              },
            }}
          />

          {!isAuth ? (
            <>
              <Drawer.Screen
                name="Login_Screen"
                component={Login}
                options={{
                  title: 'Giriş Yap',
                  drawerIcon: ({focused}) => {
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
                  drawerIcon: ({focused}) => {
                    let iconColor = focused ? 'red' : 'white';
                    return createIcon('user-plus', iconColor);
                  },
                }}
              />
            </>
          ) : null}

          {isAuth === true && role === 'admin' && (
            <Drawer.Screen
              name="AllReports_Screen"
              component={All_Reports}
              options={{
                title: 'Raporlamalar',
                drawerIcon: ({focused}) => {
                  let iconColor = focused ? 'red' : 'white';
                  return createIcon('box-archive', iconColor);
                },
              }}
            />
          )}

          {isAuth ? (
            <Drawer.Screen
              name="ProfileMain_Screen"
              component={ProfileStack}
              options={{
                title: 'Profilim',
                drawerIcon: ({focused}) => {
                  let iconColor = focused ? 'red' : 'white';
                  return createIcon('user-gear', iconColor);
                },
              }}
            />
          ) : null}
        </Drawer.Navigator>
      </NavigationContainer>
      <Toast ref={ref => Toast.setRef(ref)} />
    </>
  );
};

export default Router;
