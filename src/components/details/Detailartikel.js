import React, { useState } from "react";
import { Text, SafeAreaView, Image, ScrollView } from "react-native";
import Return from "../return/Return";
import { useRoute } from "@react-navigation/native";

const Detailartikel = () => {
  const route = useRoute();
  const { url, body, title } = route.params;

  return (
    <SafeAreaView className="min-h-screen bg-white h-auto">
      <Return to="Artikelscreen" parameter="Detail" />
      <ScrollView className="m-2">
        <Image
          source={{
            uri: `${url}`,
          }}
          className="rounded-md h-96"
        />
        <Text className="text-2xl font-semibold py-2">{title}</Text>
        <Text className="text-xl">{body}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detailartikel;
