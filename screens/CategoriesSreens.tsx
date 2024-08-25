import { FlatList } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

let CategoriesSreens = ({ navigation }: any) => {
	let renderCategoryItem = (itemData: any) => {
		let onPressHandler = () => {
			navigation.navigate("MealsOverView", {
				categoryId: itemData.item.id,
			});
		};
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={onPressHandler}
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
			numColumns={2}
		/>
	);
};

export default CategoriesSreens;
