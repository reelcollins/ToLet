import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/home';
import Wishlist from './Screens/Wishlist';
import Upload from './Screens/Upload';
import Settings from './screens/Settings';
import LandlordSettings from './Screens/LandlordSettings';
import SignIn from './Screens/SignIn';
import SignUp from './Screens/SignUp';
import './app.css';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const isLoggedIn = false;

// function HomeStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
//       <Stack.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }}/>
//       {/* <Stack.Screen name="Upload" component={Upload} options={{ headerShown: false }}/> */}
//       {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
//       {/* <Stack.Screen name="Settings" component={LandlordSettings} /> */}
//     </Stack.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      
        <Tab.Navigator showLabel={false}>
          <Tab.Screen name="Home" component={Home} options={{ headerShown: false }}/>
           <Tab.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }}/>
           {/* <Tab.Screen name="Upload" component={Upload} options={{ headerShown: false }}/> */}
           {/* <Tab.Screen name="SignIn" component={SignIn} /> */}
           <Tab.Screen name="SignUp" component={SignUp} />
           {/* <Tab.Screen name="Settings" component={LandlordSettings} /> */}
        </Tab.Navigator>
      
    </NavigationContainer>

    //if it's a landlord
    // <Tab.Screen name="Settings" component={LandlordSettings} />
    // <Tab.Screen name="Upload" component={Upload} options={{ headerShown: false }}/>
  );
}



// export default function App() {
//   return (
//     <NavigationContainer>
//       {isLoggedIn ? (
//         <Tab.Navigator showLabel={false}>
//           <Tab.Screen name="HomeStack" component={HomeStack} />
//           {/* <Tab.Screen name="Wishlist" component={Wishlist} options={{ headerShown: false }}/> */}
//           {/* <Tab.Screen name="Upload" component={Upload} options={{ headerShown: false }}/> */}
//           {/* <Tab.Screen name="SignIn" component={SignIn} /> */}
//           {/* <Tab.Screen name="Settings" component={LandlordSettings} /> */}
//         </Tab.Navigator>
//       ) : (
//         <Stack.Navigator>
//           <Stack.Screen name="Sign Up" component={SignUp}/>
//           <Stack.Screen name="Sign In" component={SignIn}/>
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>

//     //if it's a landlord
//     // <Tab.Screen name="Settings" component={LandlordSettings} />
//     // <Tab.Screen name="Upload" component={Upload} options={{ headerShown: false }}/>
//   );
// }