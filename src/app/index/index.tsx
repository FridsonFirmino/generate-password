import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "@/app/index/style";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";

import { Category } from "@/components/category";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.6} style={styles.btnAdd}>
          <MaterialIcons name="add" size={30} color={colors.gray[950]} />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <Category name="Projecto" icon="code" isSelected={true} />
      <Category name="Site" icon="language" isSelected={false} />
      <Category name="Video" icon="movie" isSelected={false} />
    </View>
  );
}
