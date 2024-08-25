import {
	Button,
	StatusBar,
	StyleSheet,
	Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import CategoriesSreens from "./screens/CategoriesSreens";
import MealDetailScreen from "./screens/MealDetailScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoritesScreens from "./screens/FavoritesScreens";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

let DrawerNavigation = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: "#482e31" },
				headerTintColor: "white",
				sceneContainerStyle: { backgroundColor: "#623739" },
				drawerContentStyle: { backgroundColor: "#482e31" },
				drawerInactiveTintColor: "#82555a",
				drawerActiveTintColor: "#c2c2c2",
				drawerActiveBackgroundColor: "#623739",
			}}
		>
			<Drawer.Screen
				name="Categories"
				component={CategoriesSreens}
				options={{
					title: "All Categories",
					drawerIcon: ({ color, size }: any) => (
						<Ionicons
							name="list"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoritesScreens}
				options={{
					title: "Favorites",
					drawerIcon: ({ color, size }: any) => (
						<Ionicons
							name="star"
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
};
export default function App() {
	return (
		<>
			<StatusBar backgroundColor="#482e31" />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="MealsCategories"
					screenOptions={{
						headerStyle: { backgroundColor: "#482e31" },
						headerTintColor: "white",
						contentStyle: {
							backgroundColor: "#623739",
						},
					}}
				>
					<Stack.Screen
						name="DrawerCategories"
						component={DrawerNavigation}
						options={{
							headerShown: false,
						}}
					/>
					<Stack.Screen
						name="MealsOverView"
						component={MealsOverViewScreen}
					/>
					<Stack.Screen
						name="MealDetail"
						component={MealDetailScreen}
						options={{
							title: "About the Meal",
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
