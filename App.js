import React from "react";
import { Button, Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { Provider } from "react-redux";
import ProductList from "./Screens/ProductList";
import ProductDetails from './Screens/ProductDetails'
import store from "./Services/rootReducer";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
  <Provider store={store}>
  <NavigationContainer>
   <Stack.Navigator>

      <Stack.Screen name="ProductList" component={ProductList}
      options={{
            title: 'Home',
            headerStyle: {
                backgroundColor: '#969696',
            },
            headerTintColor: '#fff',
        }}
      />

      <Stack.Screen name="ProductDetails" component={ProductDetails}
         options={{
           title: 'About',
           headerStyle: {
              backgroundColor: '#969696',
           },
           headerTintColor: '#fff',
         }}
       />

   </Stack.Navigator>
  </NavigationContainer>
          </Provider>

  );
}


export default App;
