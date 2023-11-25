import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import Return from "../return/Return";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { reqGetartikelbyid } from "../../features/artikel/reqGetartikelbyid";

const Detailartikel = () => {
  const route = useRoute();
  const id = route.params.id;
  const [items, setItems] = useState([]);
  useQuery({
    queryKey: ["reqGetartikelbyid"],
    queryFn: () => reqGetartikelbyid(id),
    onSuccess: (res) => {
      setItems(res);
    },
  });

  return (
    <SafeAreaView className="min-h-screen bg-white">
      <Return to="Artikelscreen" parameter="Detail" />
      <ScrollView className="m-2 h-auto">
        <Image source={{ uri: `${items.url}` }} className="rounded-md h-1/4" />
        <Text className="text-2xl font-semibold py-2">{items.title}</Text>
        <Text className="text-xl">{items.body}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detailartikel;
