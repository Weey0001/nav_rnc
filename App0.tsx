import {
	Button,
	StatusBar,
	StyleSheet,
	Text,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import CategoriesSreens from "./screens/CategoriesSreens";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

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
						name="MealsCategories"
						component={CategoriesSreens}
						options={{
							title: "All Categories",
						}}
					/>
					<Stack.Screen
						name="MealsOverView"
						component={MealsOverViewScreen}
					/>
					<Stack.Screen
						name="MealDetail"
						component={MealDetailScreen}
						
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
