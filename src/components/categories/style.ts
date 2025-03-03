import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 52,
    maxHeight: 52,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: colors.gray[600],
  },
  content: {
    paddingHorizontal: 24,
    gap: 16,
  },
});
