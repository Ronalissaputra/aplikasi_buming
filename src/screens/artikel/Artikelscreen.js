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

  const { isLoading } = useQuery({
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
        {isLoading ? (
          <View className="w-full min-h-screen flex items-center justify-center">
            <Text className="text-xl font-light">Loading..</Text>
          </View>
        ) : (
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
                          id: item.id,
                          url: item.url,
                          body: item.body,
                          title: item.title,
                          isLoading: isLoading,
                          image: item.image,
                        })
                      }
                      className="flex-row items-center space-x-3"
                    >
                      <Image
                        source={{
                          uri: `${item.url}`,
                        }}
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
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Artikelscreen;
