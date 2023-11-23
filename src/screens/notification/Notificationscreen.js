import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Buttonback from "../../components/return/Return";
import { notifs } from "./data";

const Notificationscreen = () => {
  return (
    <SafeAreaView>
      <Buttonback to="Homescreen" parameter="Notifikasi" />
      <ScrollView className="bg-white min-h-screen">
        <View className="gap-2 px-2 mt-2 bg-white">
          {notifs.map((item) => (
            <View
              key={item.id}
              className="border-b bg-white border-slate-200 pb-2"
            >
              <View className="rounded-md relative flex-row items-center justify-between py-4">
                <View>
                  <Text className="text-xl text-slate-800 font-semibold">
                    {item.title}
                  </Text>
                </View>
              </View>
              <Text>{item.tanggal}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Notificationscreen;
