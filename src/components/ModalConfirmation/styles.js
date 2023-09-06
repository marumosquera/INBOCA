import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  blur: {
    flex: 1,
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    borderRadius: 20,
    padding: 35
  },
  button: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
    marginLeft:10
  },
  modalTextTitle: {
    fontWeight: "700",
    fontSize: 18,
    textAlign: "center",
    color: "white",
  },
  containerButtons: {
    alignItems: "center",
    marginTop: 20,
  },
});