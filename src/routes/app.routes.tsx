import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PlusCircle, SoccerBall } from 'phosphor-react-native';
import { useTheme } from 'native-base';
import { Platform } from 'react-native';

import New from '../screens/New';
import Pools from '../screens/Pools';
import Find from '../screens/Find';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    const { colors, sizes } = useTheme();

    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: colors.yellow[500],
                tabBarInactiveTintColor: colors.gray[300],
                tabBarStyle: {
                    position: 'absolute',
                    height: sizes[16],
                    borderTopWidth: 0,
                    backgroundColor: colors.gray[800]
                },
                tabBarItemStyle: {
                    position: 'relative',
                    top: Platform.OS === 'android' ? -7 : 0
                }
            }}
        >
            <Screen
                name="new"
                component={New}
                options={{
                    tabBarIcon: ({ color }) => <PlusCircle color={color} size={sizes[6]} />,
                    tabBarLabel: 'Novo Bolão'
                }}
            />
            <Screen
                name="pools"
                component={Pools}
                options={{
                    tabBarIcon: ({ color }) => <SoccerBall color={color} size={sizes[6]} />,
                    tabBarLabel: 'Meus Bolões'
                }}
            />
            <Screen name="find" component={Find} options={{ tabBarButton: () => null }} />
        </Navigator>
    );
}
