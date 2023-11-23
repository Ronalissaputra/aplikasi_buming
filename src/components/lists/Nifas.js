import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, TouchableOpacity } from "react-native";
import Return from "../return/Return";
import { useQuery } from "@tanstack/react-query";
import { reqGetibu } from "../../features/ibu/reqGetibu";
import { useNavigation } from "@react-navigation/native";

const Nifas = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  useQuery({
    queryKey: ["reqGetibuhamil"],
    queryFn: reqGetibu,
    onSuccess: (res) => {
      setItems(res.response[0].Pemantauannifas);
    },
  });
  return (
    <SafeAreaView>
      <Return to="Homescreen" parameter="Nifas" />

      <View className="bg-white min-h-full px-2">
        <ScrollView className="gap-2 px-2 mt-2 bg-white">
          {items &&
            items.map((item) => (
              <View
                key={item.id}
                className="border-b bg-white border-slate-300"
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Detailnifas", {
                      id: `${item.id}`,
                    })
                  }
                  className="rounded-md flex-row items-center justify-between py-2"
                >
                  <View>
                    <Text className="text-xl text-slate-800 font-semibold">
                      {item.status}
                    </Text>
                    <Text className="text-lg font-light text-slate-800">
                      {item.tempat}
                    </Text>
                  </View>
                  <Text>{item.tanggal}</Text>
                </TouchableOpacity>
              </View>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Nifas;
