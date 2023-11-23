import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Wellcomescreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="bg-white min-h-screen">
      <View className="flex">
        <Image
          source={require("../../../assets/wellcome.png")}
          className="w-full h-[75%]"
        />
        <View className="h-[20%]">
          <View className="px-5">
            <Text className="text-2xl font-semibold">
              Cegah Stunting Sejak Dini
            </Text>
            <Text className="text-xl font-light">Ibu Cerdas Anak Sehat</Text>
          </View>
          <View className="flex-row items-center my-2 mx-5 space-x-2">
            <Text className="text-xl font-semibold">Sudah punya akun?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Loginscreen")}
              className="font-semibold"
            >
              <Text className="text-xl font-semibold text-blue-600">Masuk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Wellcomescreen;
