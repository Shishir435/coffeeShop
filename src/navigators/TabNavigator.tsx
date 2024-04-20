import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import {StyleSheet} from 'react-native';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import CustomIcons from '../components/customIcons';

interface IconProps {
  focused: boolean;
}
const Tab = createBottomTabNavigator();
const TabBarBackground = () => (
  <BlurView overlayColor="" blurAmount={15} style={styles.BlurViewStyles} />
);

const HomeIcon = ({focused}: IconProps) => (
  <CustomIcons
    name="home"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);
const CartIcon = ({focused}: IconProps) => (
  <CustomIcons
    name="cart"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);
const FavouriteIcon = ({focused}: IconProps) => (
  <CustomIcons
    name="like"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);
const HistoryIcon = ({focused}: IconProps) => (
  <CustomIcons
    name="bell"
    size={25}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: TabBarBackground,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: CartIcon,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: FavouriteIcon,
        }}
      />
      <Tab.Screen
        name="History"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: HistoryIcon,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
export default TabNavigator;
