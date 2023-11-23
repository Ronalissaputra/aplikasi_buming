import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Return from "../return/Return";

const Status = () => {
  return (
    <SafeAreaView>
      <Return to="Homescreen" parameter="status" />
      <Text>Status</Text>
    </SafeAreaView>
  );
};

export default Status;
