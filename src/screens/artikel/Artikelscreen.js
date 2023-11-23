import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { reqGetartikel } from "../../features/artikel/reqGetartikel";
import { useQuery } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";

const Artikelscreen = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);

  useQuery({
    queryKey: ["reqGetartikel"],
    queryFn: reqGetartikel,
    onSuccess: (res) => {
      setItems(res);
    },
  });

  return (
    <SafeAreaView className="min-h-screen bg-white">
      <ScrollView>
        <Text className="text-3xl m-2 font-semibold">Artikel</Text>
        <View className="mt-5">
          {items &&
            items.map((item, index) => (
              <View
                key={index}
                className="border-b px-2 bg-white border-slate-200 pb-2"
              >
                <View className="rounded-md relative flex-row items-center justify-between py-4">
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Detailartikel", {
                        id: `${item.id}`,
                      })
                    }
                    className="flex-row items-center space-x-3"
                  >
                    <Image
                      source={{ uri: `${item.url}` }}
                      className="w-12 h-12 rounded-md"
                    />
                    <View>
                      <Text className="text-lg text-slate-800 font-semibold">
                        {item.title}
                      </Text>
                      <Text>{item.createdAt}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Artikelscreen;
