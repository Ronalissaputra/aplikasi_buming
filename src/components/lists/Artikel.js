import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import Return from "../return/Return";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { reqGetartikelbyid } from "../../features/artikel/reqGetartikelbyid";

const Artikel = () => {
  const route = useRoute();
  const { id } = route.params;
  const [item, setItem] = useState("");

  useQuery({
    queryKey: ["reqGetartikel"],
    queryFn: () => reqGetartikelbyid(id),
    onSuccess: (res) => {
      setItem(res);
    },
  });

  return (
    <SafeAreaView>
      <Return to="Artikelscreen" parameter="Detail artikel" />
      <ScrollView className="w-full min-h-full px-2">
        <View className="rounded-lg">
          <Image
            source={{
              uri: `${item.url}`,
            }}
            className="w-auto rounded-md h-40 bg-slate-200 bg-transparent"
          />
          <View className="bottom-0 space-y-2">
            <Text className="text-xl font-bold text-slate-900 underline decoration-sky-500">
              {item.title}
            </Text>
            <Text className="text-xl text-slate-900 underline decoration-sky-500">
              {item.body}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Artikel;
