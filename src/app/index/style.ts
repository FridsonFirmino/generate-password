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
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: colors.gray[900],
    borderTopColor: colors.gray[800],
    borderTopWidth: 1,
    paddingBottom: 42,
    padding: 24,
  },
  modalHeader: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 25,
  },
  modalCategory: {
    flex: 1,
    fontSize: 16,
    fontWeight: "500",
    color: colors.gray[400],
  },
  modalLinkName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.gray[200],
  },
  modalLinkUrl: {
    fontSize: 13,
    color: colors.gray[400],
  },
  modalFooter: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    paddingTop: 10,
    borderTopColor: colors.gray[600],
    borderTopWidth: 1,
  },
});
