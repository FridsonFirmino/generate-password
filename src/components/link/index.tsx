import { View, Text, TouchableOpacity, Linking } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "@/styles/colors";

type linksProps = {
  name: string;
  url: string;
  onDetails: () => void;
};
export function Link({ name, url, onDetails }: linksProps) {
  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>
          {name}
        </Text>
        <Text
          style={styles.url}
          onPress={() => {
            Linking.openURL(url);
          }}
          numberOfLines={1}
        >
          {url}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.6} onPress={onDetails}>
        <MaterialIcons name="more-horiz" size={20} color={colors.gray[400]} />
      </TouchableOpacity>
    </View>
  );
}
