
import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PersonalDetails from './src/careers/personalDetails';
import Login from './src/careers/login';
import SignUp from './src/careers/signup';
import AcademicDetails from './src/careers/academicDetial';
import WorkExperience from './src/careers/experienceDetails';
import FamilyDetails from './src/careers/familyDetails';
import Other from './src/careers/othersDetails';
import DeclarationComponent from './src/careers/Decalration';
import Uploads from './src/careers/uploads';
import Icon from "react-native-vector-icons/FontAwesome";




const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 10, // Adjust the font size as needed
          fontWeight: 'bold',
          color: '#333', // Add sky blue color
        },
        tabBarTabStyle: {width: 20},

        tabBarIndicatorStyle: {
          backgroundColor: '#000', // Set indicator color to sky blue
        },
      }}>

    <Tab.Screen
  name="PersonalDetails"
  component={PersonalDetails}
  options={{
    title: () => (
      <Icon name="user-circle-o" size={24} color="black" />
    ),
  }}
/>
      <Tab.Screen
        name="AcademicDetails"
        component={AcademicDetails}
        options={{
          title:()=>(
            <Icon name='university' size={24} color="black"/>
          ),
          
        }}
      />
     
      <Tab.Screen
        name="WorkExperience"
        component={WorkExperience}
        options={{
          title:()=>(
            <Icon name='server' size={24} color="black"/>
          ),
          
        }}
      />
      <Tab.Screen
        name=" FamilyDetails"
        component={ FamilyDetails}
        options={{
          title:()=>(
            <Icon name='group' size={24} color="black"/>
          ),
          
        }}
      />
       
      
       <Tab.Screen
        name="Other"
        component={Other}
        options={{
          title:()=>(
            <Icon name='cube' size={24} color="black"/>
          ),
          
        }}
      />
       <Tab.Screen
        name="uploads"
        component={Uploads}
        options={{
          title:()=>(
            <Icon name='file-photo-o' size={24} color="black"/>
          ),
          
        }}
      />
       <Tab.Screen
        name="Declaration"
        component={DeclarationComponent}
        options={{
          title:()=>(
            <Icon name='handshake-o' size={24} color="black"/>
          ),
          
        }}
      />
    </Tab.Navigator>
    
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{title:'Login' }}
        />
        <Stack.Screen
          name="Signup"
          component={SignUp}
          options={{title: 'signup'}}
        />
        <Stack.Screen name="Application Form" component={TabTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App