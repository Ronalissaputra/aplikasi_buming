import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [timeOfDay, setTimeOfDay] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 0 && currentTime < 6) {
      setTimeOfDay("pagi");
    } else if (currentTime >= 6 && currentTime < 14) {
      setTimeOfDay("siang");
    } else if (currentTime >= 14 && currentTime < 18) {
      setTimeOfDay("sore");
    } else {
      setTimeOfDay("malam");
    }
  }, []);

  const currentDate = new Date();
  const daysOfWeek = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];

  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const dayOfMonth = currentDate.getDate();
  const month = months[currentDate.getMonth()];
  // const year = currentDate.getFullYear();

  return (
    <SafeAreaView>
      <ScrollView className="bg-pink-500 w-full min-h-screen">
        <View className="px-5">
          <View className="h-16 flex-row items-center justify-between">
            <Text></Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notificationscreen")}
              className="relative"
            >
              <MaterialIcons name="notifications" size={28} color="white" />
            </TouchableOpacity>
          </View>
          <View>
            <Text className="text-2xl font-semibold text-white">
              Selamat {timeOfDay}
            </Text>
            <Text className="text-white text-lg">
              Hari yang luar biasa! Lakukan istirahat dengan baik!
            </Text>
          </View>
          <View className="bg-white w-full h-[170px] rounded-lg mt-6 p-3">
            <Text className="text-lg">Jadwal hari ini</Text>
            <Text className="text-xl font-semibold">
              {dayOfWeek}, {dayOfMonth} {month}
            </Text>
            <View className="text-center m-auto items-center flex justify-center">
              <Text className="text-lg font-light">
                Tidak ada jadwal pemeriksaan hari ini
              </Text>
            </View>
          </View>
        </View>
        <View className="menu bg-white w-full min-h-full mt-6 px-5">
          <Text className="text-xl font-semibold my-5">Menu</Text>
          <View className="flex-1 flex-row flex-wrap justify-between text-center items-center space-y-5">
            <View className="w-[48%] flex-cols items-center justify-center space-y-2">
              <TouchableOpacity
                onPress={() => navigation.navigate("Ibuhamil")}
                className="text-center items-center bg-slate-300 p-4 rounded-xl w-[80px]"
              >
                <MaterialCommunityIcons
                  name="mother-nurse"
                  size={35}
                  color="#0A6EBD"
                />
              </TouchableOpacity>
              <Text className="items-center text-center text-md font-semibold">
                Ibu hamil
              </Text>
            </View>
            <View className="w-[48%] flex-cols items-center justify-center space-y-2">
              <TouchableOpacity
                onPress={() => navigation.navigate("Anak")}
                className="text-center items-center bg-slate-300 p-4 rounded-xl w-[80px]"
              >
                <FontAwesome5 name="baby" size={35} color="#0A6EBD" />
              </TouchableOpacity>
              <Text className="items-center text-center text-md font-semibold">
                Anak
              </Text>
            </View>
            <View className="w-[48%] flex-cols items-center justify-center space-y-2">
              <TouchableOpacity
                onPress={() => navigation.navigate("Nifas")}
                className="text-center items-center bg-slate-300 p-4 rounded-xl w-[80px]"
              >
                <MaterialCommunityIcons
                  name="mother-heart"
                  size={35}
                  color="#0A6EBD"
                />
              </TouchableOpacity>
              <Text className="items-center text-center text-md font-semibold">
                Masa nifas
              </Text>
            </View>
            <View className="w-[48%] flex-cols items-center justify-center space-y-2">
              <TouchableOpacity
                onPress={() => navigation.navigate("Kehamilan")}
                className="text-center items-center bg-slate-300 p-4 rounded-xl w-[80px]"
              >
                <MaterialCommunityIcons
                  name="mother-heart"
                  size={35}
                  color="#0A6EBD"
                />
              </TouchableOpacity>
              <Text className="items-center text-center text-md font-semibold">
                Kehamilan
              </Text>
            </View>
            <View className="w-[48%] flex-cols items-center justify-center space-y-2">
              <TouchableOpacity className="text-center items-center bg-slate-300 p-4 rounded-xl w-[80px]">
                <MaterialCommunityIcons
                  name="mother-heart"
                  size={35}
                  color="#0A6EBD"
                />
              </TouchableOpacity>
              <Text className="items-center text-center text-md font-semibold">
                Pemantauan Anak
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
