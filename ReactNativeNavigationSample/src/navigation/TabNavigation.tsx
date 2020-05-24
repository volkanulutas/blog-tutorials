import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MessageScreen from '../container/message/MessageScreen';
import NotificationScreen from '../container/notification/NotificationScreen';
import ProfileScreen from '../container/profile/ProfileScreen';
import SettingScreen from '../container/setting/SettingScreen';

const Tab = createBottomTabNavigator();

function TabNavigation() {
    return (
    <Tab.Navigator>
            <Tab.Screen name="Mesajlar" component={MessageScreen} />
            <Tab.Screen name="Bildirimler" component={NotificationScreen} />
            <Tab.Screen name="Profil" component={ProfileScreen}/>
            <Tab.Screen name="Ayarlar" component={SettingScreen} />
        </Tab.Navigator>
        );
  }
  export default TabNavigation;
