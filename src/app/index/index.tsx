import { View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "@/app/index/style";
import { colors } from "@/styles/colors";

import { Categories } from "@/components/categories";
import { Links } from "@/components/links";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.6} style={styles.btnAdd}>
          <MaterialIcons name="add" size={30} color={colors.gray[950]} />
        </TouchableOpacity>
      </View>

      <Categories />
      <Links />
    </View>
  );
}
