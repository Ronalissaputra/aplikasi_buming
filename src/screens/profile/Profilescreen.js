import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { reqLogout } from "../../features/authentication/reqLogout";
import { reqToken } from "../../features/refreshtoken/reqToken";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const Profilescreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");

  const { mutate } = useMutation({
    mutationKey: ["reqLogout"],
    mutationFn: reqLogout,
    onSuccess: () => {
      navigation.navigate("Authnavigation");
    },
  });

  useQuery({
    queryKey: ["reqToken"],
    queryFn: reqToken,
    onSuccess: (res) => {
      setEmail(res.decoded.email);
    },
  });

  return (
    <SafeAreaView className="bg-white min-h-full">
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View className="mx-2">
        <View>
          <Text className="text-3xl my-2 font-semibold">Profile</Text>
        </View>
        <View className="mt-5 space-y-3">
          <View className="flex-row justify-between border-2 rounded-md p-4">
            <View className="flex-row space-x-2">
              <Ionicons name="person-outline" size={24} color="black" />
              <Text className="text-xl">{email}</Text>
            </View>
            <MaterialIcons name="done" size={26} color="green" />
          </View>
          <TouchableOpacity className="flex-row justify-between border-2 rounded-md p-4 w-full">
            <View className="flex-row space-x-2">
              <Ionicons name="md-help-circle-outline" size={24} color="black" />
              <Text className="text-xl">Bantuan</Text>
            </View>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => mutate()}
            className="flex-row justify-between border-2 rounded-md p-4 w-full"
          >
            <View className="flex-row space-x-2">
              <Ionicons name="exit-outline" size={24} color="black" />
              <Text className="text-xl">Keluar</Text>
            </View>
            <Entypo name="chevron-small-right" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* <View className="min-h-screen bg-white">
        <View className="w-full h-2/6 rounded-b-xl bg-pink-300">
          <View className="flex-row items-center justify-center h-full">
            <View className="items-center">
              <Text className="text-2xl text-slate-800">Hi {email}</Text>
              <View className="flex-row right-0 items-center h-12 mt-2 mx-2 rounded-md">
                <TouchableOpacity
                  onPress={() => mutate()}
                  className="flex-row space-x-2 items-center"
                >
                  <Text className="text-2xl text-slate-800">Logout</Text>
                  <AntDesign name="arrowright" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View> */}
    </SafeAreaView>
  );
};

export default Profilescreen;
