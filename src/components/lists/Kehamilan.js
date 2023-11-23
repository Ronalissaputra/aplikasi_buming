import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Return from "../return/Return";
import { useQuery } from "@tanstack/react-query";
import { reqGetibu } from "../../features/ibu/reqGetibu";
import { useNavigation } from "@react-navigation/native";

const Kehamilan = () => {
  const [items, setItems] = useState([]);
  const navigation = useNavigation();
  useQuery({
    queryKey: ["reqGetibuhamil"],
    queryFn: reqGetibu,
    onSuccess: (res) => {
      setItems(res.response[0].Pemantauankehamilan);
    },
  });

  return (
    <SafeAreaView>
      <Return to="Homescreen" parameter="Kehamilan" />
      <View className="bg-white min-h-full px-2">
        <ScrollView className="gap-2 px-2 mt-2 bg-white">
          {items &&
            items.map((item, index) => (
              <View
                key={item.id}
                className="border-b bg-white border-slate-300"
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Detailkehamilan", {
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

export default Kehamilan;
