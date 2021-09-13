import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: "absolute",
    left: 20,
    right: 20,
    bottom: 32,
    backgroundColor: "#fff",
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
  },

  searchBox: {
    width: 200,
    color: "#8fa7b3",
  },

  searchUserButton: {
    width: 56,
    height: 56,
    backgroundColor: "#1313",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  }


});