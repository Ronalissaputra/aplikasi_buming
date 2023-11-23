import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import Return from "../return/Return";
import { useQuery } from "@tanstack/react-query";
import { reqGetkehamilanbyid } from "../../features/kehamilan/reqGetkehamilanbyid";

const Detailkehamilan = () => {
  const route = useRoute();
  const id = route.params.id;
  const [items, setItems] = useState([]);
  useQuery({
    queryKey: ["reqGetkehamilan"],
    queryFn: () => reqGetkehamilanbyid(id),
    onSuccess: (res) => {
      setItems(res);
    },
  });

  return (
    <SafeAreaView className="min-h-full bg-white">
      <Return to="Kehamilan" parameter="Detail" />
      <ScrollView>
        <View>
          <Text className="text-xl font-semibold p-5">{items.status}</Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Tanggal - {items && items.tanggal}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Tempat - {items && items.tempat}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detailkehamilan;
