import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFormik } from "formik";
import { useMutation } from "@tanstack/react-query";
import { reqLogin } from "../../features/authentication/reqLogin";
import Buttonback from "../../components/return/Return";

const Loginscreen = () => {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);

  const { mutate } = useMutation({
    mutationKey: ["reqLogin"],
    mutationFn: reqLogin,
    onSuccess: () => {
      navigation.navigate("Stacknavigation");
      formik.resetForm();
    },
    onError: (err) => {
      alert(err.response.data.message);
    },
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      mutate(values);
    },
  });
  return (
    <SafeAreaView className="w-full min-h-screen bg-white">
      <Buttonback to="Wellcomescreen" parameter="Masuk" />
      <View className="px-2 mt-6">
        <View className="space-y-2">
          <View>
            <Text className="text-xl pb-2 font-semibold">Email / Nomorhp</Text>
            <TextInput
              require
              placeholder="Masukkan email aktif anda"
              onChangeText={formik.handleChange("email")}
              value={formik.values.email}
              textContentType="emailAddress"
              keyboardType="email-address"
              style={{
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 5,
                fontSize: 18,
                padding: 12,
              }}
            />
          </View>
          <View>
            <Text className="text-xl font-semibold pb-2">Password</Text>
            <View className="relative flex justify-center">
              <TextInput
                require
                onChangeText={formik.handleChange("password")}
                value={formik.values.password}
                secureTextEntry={open ? false : true}
                placeholder="Password"
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  borderRadius: 5,
                  fontSize: 18,
                  padding: 12,
                }}
              />
              {open ? (
                <TouchableOpacity
                  onPress={() => setOpen(!open)}
                  className="absolute right-2"
                >
                  <Ionicons name="md-eye-outline" size={24} color="black" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => setOpen(!open)}
                  className="absolute right-2"
                >
                  <Ionicons name="md-eye-off-outline" size={20} color="black" />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View className="pt-4">
          <TouchableOpacity
            onPress={formik.handleSubmit}
            className="items-center py-3 rounded-md bg-pink-500"
          >
            <Text className="text-white text-xl font-semibold">Masuk</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Loginscreen;
