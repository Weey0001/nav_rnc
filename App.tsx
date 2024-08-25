import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import UserScreen from "./screens/UserScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

const Drawer = createDrawerNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: "#482e31",
					},
					headerTintColor: "white",

					drawerActiveBackgroundColor: "#482e318a",
					drawerActiveTintColor: "white",
					// drawerStyle: {
					// 	backgroundColor: "#ccc",
					// },
				}}
			>
				<Drawer.Screen
					name="Welcom"
					component={WelcomeScreen}
					options={{
						title: "Welcome",
						drawerLabel: "Welcome screen",
						drawerIcon: ({ color, size }: any) => (
							<Ionicons
								name="home-outline"
								size={size}
								color={color}
							/>
						),
					}}
				/>
				<Drawer.Screen
					name="User"
					component={UserScreen}
					options={{
						title: "User",
						drawerLabel: "User screen",
						drawerIcon: ({ color, size }: any) => (
							<Ionicons
								name="person-outline"
								size={size}
								color={color}
							/>
						),
					}}
				/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
};

export default App;
