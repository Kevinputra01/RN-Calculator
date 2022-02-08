import React from "react";
import { View } from "react-native";

export default ({ children }) => (
  <View style={{ flexDirection: "row" }}>{children}</View>
);
