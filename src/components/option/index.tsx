import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "@/styles/colors";

type OptionProps = TouchableOpacityProps & {
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: "primary" | "secondary";
};
export function Option({
  name,
  icon,
  variant = "primary",
  ...rest
}: OptionProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons
        name={icon}
        size={15}
        color={variant === "primary" ? colors.green[300] : colors.gray[300]}
      />

      <Text
        style={
          variant === "primary" ? styles.primaryTitles : styles.secondaryTitles
        }
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
