import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    marginBottom: 15,
  },
  logo: {
    width: 38,
    height: 34,
  },
  btnAdd: {
    width: 36,
    height: 32,
    backgroundColor: colors.green[300],
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
