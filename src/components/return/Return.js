import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";

const Return = ({ parameter, to }) => {
  const navigation = useNavigation();

  return (
    <View className="w-full bg-white">
      <View className="h-14 px-2 space-x-4 flex-row items-center border-b-2 border-slate-300">
        <TouchableOpacity onPress={() => navigation.navigate(`${to}`)}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-semibold">{parameter}</Text>
      </View>
    </View>
  );
};

export default Return;
