import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import DetailsScreen from './src/screens/DetsailsScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import TabNavigator from './src/navigators/TabNavigator';

const stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'slide_from_bottom'}}
        />
        <stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <stack.Screen
          name="Payments"
          component={PaymentScreen}
          options={{animation: 'slide_from_bottom'}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default App;
