import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 10,
  },
});
