import { colors } from "@/styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  primaryTitles: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.green[300],
  },
  secondaryTitles: {
    fontSize: 14,
    color: colors.gray[400],
  },
});
