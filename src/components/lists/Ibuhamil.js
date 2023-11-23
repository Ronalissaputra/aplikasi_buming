import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Return from "../return/Return";
import { useQuery } from "@tanstack/react-query";
import { reqGetibu } from "../../features/ibu/reqGetibu";

const Ibuhamil = () => {
  const [items, setItems] = useState([]);
  const { isLoading } = useQuery({
    queryKey: ["reqGetibuhamil"],
    queryFn: reqGetibu,
    onSuccess: (res) => {
      setItems(res.response);
    },
  });

  return (
    <SafeAreaView className="min-h-full bg-white">
      <Return to="Homescreen" parameter="Ibuhamil" />
      {isLoading ? (
        <View className="w-full min-h-screen flex items-center justify-center">
          <Text className="text-xl">Loading...</Text>
        </View>
      ) : (
        <ScrollView className="pb-10">
          {items &&
            items.map((item, index) => (
              <View key={index}>
                <Text className="text-xl font-semibold p-5">Data Ibu</Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Id - {item.customId}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Nama - {item.nama}
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Umur - {item.umur} Tahun
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Lama nikah - {item.lama_nikah} Tahun
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Suku - {item.suku}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Agama - {item.agama}
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Pendidikan - {item.pendidikan}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Pekerjaan - {item.pekerjaan}
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Alamat - {item.alamat}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Nomor Hp - {item.nomor_hp}
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Gol. Darah - {item.golongan_darah}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Hamil Ke - {item.hamil_ke}
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Jumlah Anak - {item.jumlah_anak}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Siklus - {item.siklus}
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Lama Haid - {item.lama_haid}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Hptp - {item.hptp}
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Hpl - {item.hpl}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  No. Bpjs - {item.nomor_bpjs}
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  T. Periksa - {item.tempat_periksa}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  E-mail - {item.email}
                </Text>
                <Text className="text-xl font-semibold p-5">Data Suami</Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Nama - {item.nama_suami}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Umur - {item.umur_suami}
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Agama - {item.agama_suami}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Suku - {item.suku_suami}
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Pendidikan - {item.pendidikan_suami}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Pekerjaan - {item.pekerjaan_suami}
                </Text>
                <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
                  Alamat - {item.alamat_suami}
                </Text>
                <Text className="px-5 py-4 text-xl font-light">
                  Nomor Hp - {item.nomorhp_suami}
                </Text>
              </View>
            ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Ibuhamil;
