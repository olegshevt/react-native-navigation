import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { useWindowDimensions } from 'react-native';
import imageItem from './assets/white-navigation.png';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <StatusBar hidden={true} />
        </View>
    );
}

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ backgroundColor: '#fff' }}>
                <View style={styles.mainContent}>
                    <View style={styles.menuContainer}>
                        <Text style={styles.nameLabel}>Viktor</Text>
                        <DrawerItemList {...props} />
                        <View style={styles.borderItem}></View>
                        <TouchableOpacity style={styles.signOutButton}><Text style={styles.signOutButtonLabel}>Sign Out</Text></TouchableOpacity>
                    </View>
                    <View style={styles.imageBlock}>
                        <Image style={styles.leftImage} source={imageItem} />
                    </View>
                </View>
            </View>
        </DrawerContentScrollView>
    );
}

function DrawerNavigator() {
    const dimensions = useWindowDimensions();
    return (
        <Drawer.Navigator screenOptions={{
        }} drawerStyle={styles.drawerStyles}
            drawerContentOptions={{
                activeTintColor: '#FC8074',
                activeBackgroundColor: 'rgba(252, 128, 116, .2);',
                inactiveTintColor: '#fff',

                itemStyle: { marginVertical: 10, borderRadius: 15.5, color: '#fff', padding: 0 },
                labelStyle: { fontSize: 20, paddingLeft: 20, paddingBottom: 5, paddingTop: 5 }
            }}
            hideStatusBar={true}
            drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Start" component={StackNavigator} />
            <Drawer.Screen name="Your Cart" component={StackNavigator} />
            <Drawer.Screen name="Favourites" component={StackNavigator} />
            <Drawer.Screen name="Your Orders" component={StackNavigator} />
        </Drawer.Navigator>

    );
}

const Stack = createStackNavigator();
function StackNavigator({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{
                headerTitle: <Text>Start</Text>,
                headerTitleStyle: {
                    marginLeft: 30,
                    fontSize: 24,
                    lineHeight: 33,
                    color: '#9F9FA0',
                    textTransform: 'uppercase'
                },

                headerTitleAlign: 'left',
                headerLeftContainerStyle: {
                    marginLeft: 36
                },
                headerStyle: {
                    shadowColor: 'transparent',
                    height: 80
                },
                headerLeft: () => (
                    <Ionicons onPress={() => navigation.dispatch(DrawerActions.openDrawer())} name="ios-menu-outline" size={36} color="#9F9FA0" />
                ),
                headerRight: () => (
                    <Button
                        onPress={() => alert('This is a button!')}
                        title="Info"
                        color="#fff"
                    />
                ),
            }} name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

function App() {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    )
}
export default App;

const styles = StyleSheet.create({
    mainContent: {
        backgroundColor: '#1F1B33',
        borderTopLeftRadius: 48,
        display: 'flex',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    drawerItems: {
        color: '#fff',
    },
    signOutButtonLabel: {
        color: '#fff',
        fontSize: 20,
        lineHeight: 27,
    },
    signOutButton: {
        marginLeft: 40
    },
    borderItem: {
        height: 1,
        width: 220,
        backgroundColor: '#84818E',
        marginBottom: 50,
        marginTop: 30,
        marginLeft: 10
    },
    leftImage: {
        width: 375,
        height: 665,
        transform: [{ rotate: "-10deg" }]
    },
    imageBlock: {
        backgroundColor: '#1F1B33',
        paddingLeft: 20
    },
    menuContainer: {
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop: 100
    },
    nameLabel: {
        color: '#fff',
        fontSize: 28,
        lineHeight: 38,
        marginLeft: 35,
        fontWeight: 'bold',
        marginBottom: 40
    },

    drawerStyles: {
        width: '100%',
        backgroundColor: '#1F1B33',
    },
});



