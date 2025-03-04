import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./style";

type btnProps = TouchableOpacityProps & {
  title: string;
};
export default function Button({ title, ...rest }: btnProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
