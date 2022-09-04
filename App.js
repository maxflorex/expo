import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import TaskFormScreen from './screens/TaskFormScreen';

const Stack = createStackNavigator()

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={({ navigation }) => ({
						title: "Tasks App",
						headerStyle: { backgroundColor: '#222f3e' },
						headerTitleStyle: { color: '#ffffff' },
						headerRight: () => (
							<TouchableOpacity onPress={() => navigation.navigate('TaskFormScreen')} >
								<Text style={{ color: '#ffffff', marginRight: 20, fontSize: 15 }}>New</Text>
							</TouchableOpacity>
						)
					})} />
				<Stack.Screen name="TaskFormScreen" component={TaskFormScreen}
					options={{
						title: 'Create Task',
						headerStyle: {
							backgroundColor: '#222f3e',
						},
						headerTitleStyle: { color: '#ffffff' },
						headerTintColor: '#ffffff'
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer >
	);
}