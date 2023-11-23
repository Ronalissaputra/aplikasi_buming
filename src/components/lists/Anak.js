import React, { useEffect, useState } from "react";
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

const Anak = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const { isLoading } = useQuery({
    queryKey: ["reqGetibuhamil"],
    queryFn: reqGetibu,
    onSuccess: (res) => {
      setItems(res.response[0].Anak);
    },
  });

  return (
    <SafeAreaView>
      <Return to="Homescreen" parameter="Anak" />
      <View className="bg-white min-h-full px-2">
        {isLoading ? (
          <View className="flex items-center justify-center w-full min-h-screen">
            <Text className="text-xl">Loading...</Text>
          </View>
        ) : (
          <ScrollView className="gap-2 px-2 mt-2 bg-white">
            {items &&
              items.map((item, index) => (
                <View
                  key={index}
                  className="border-b bg-white border-slate-300"
                >
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Detailanak", {
                        id: `${item.id}`,
                      })
                    }
                    className="rounded-md flex-row items-center justify-between py-2"
                  >
                    <View>
                      <Text className="text-xl text-slate-800 font-semibold">
                        {item.nama}
                      </Text>
                      <Text className="text-lg font-light text-slate-800">
                        Anak ke {item.anak_ke}
                      </Text>
                    </View>
                    <Text>{item.tanggal_lahir}</Text>
                  </TouchableOpacity>
                </View>
              ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Anak;
