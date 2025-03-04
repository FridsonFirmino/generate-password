import { View, FlatList } from "react-native";

import { styles } from "./style";
import { Category } from "@/components/category";
import { categories } from "@/utils/categories";

type categoriesProps = {
  selected: string;
  onCategorySelect: (category: string) => void;
};
export function Categories({ selected, onCategorySelect }: categoriesProps) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          icon={item.icon}
          isSelected={item.name === selected}
          onPress={() => onCategorySelect(item.name)}
        />
      )}
      horizontal
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={false}
    />
  );
}
