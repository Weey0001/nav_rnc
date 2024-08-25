import { View, StyleSheet, FlatList } from "react-native";

// import Meal from "../models/meal";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

let MealsOverViewScreen = ({
	route,
	navigation,
}: {
	route: any;
	navigation: any;
}) => {
	let { categoryId } = route.params;

	const displayMeals = MEALS.filter((meal) => {
		return meal.categoryIds.indexOf(categoryId) >= 0;
	});

	useLayoutEffect(() => {
		let categoryTitle = CATEGORIES.find(
			(category) => category.id === categoryId,
		).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [categoryId, navigation]);

	let renderMealsItem = (itemData: any) => {
		const item = itemData.item;
		const mealProps = {
			id: item.id,
			title: item.title,
			duration: item.duration,
			complexity: item.complexity,
			affordability: item.affordability,
			image: item.imageUrl,
		};
		return <MealItem {...mealProps} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={displayMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderMealsItem}
			/>
		</View>
	);
};

export default MealsOverViewScreen;

let styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		padding: 16,
	},
});
