// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItemList,
//     DrawerItem,
// } from '@react-navigation/drawer';
// import StartScreen from '../screens/StartScreen';

// const MainNavigator = props => {

//     const Drawer = createDrawerNavigator();

//     function CustomDrawerContent(props) {
//         return (
//             <DrawerContentScrollView {...props}>
//                 <DrawerItemList {...props} />
//                 <DrawerItem
//                     label="Close drawer"
//                     onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
//                 />
//                 <DrawerItem
//                     label="Toggle drawer"
//                     onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
//                 />
//             </DrawerContentScrollView>
//         );
//     }

//     return (

//         <NavigationContainer>
//             <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
//                 <Drawer.Screen name="Start" component={StartScreen} />
//                 {/* <Drawer.Screen name="Акции" /> */}
//             </Drawer.Navigator>
//         </NavigationContainer>
//     )

// }

// export default MainNavigator;