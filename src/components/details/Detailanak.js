import React, { useState } from "react";
import { Text, SafeAreaView, ScrollView, View } from "react-native";
import Return from "../return/Return";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { reqGetanakbyid } from "../../features/anak/reqGetanakbyid";

const Detailanak = () => {
  const route = useRoute();
  const id = route.params.id;
  const [items, setItems] = useState([]);
  useQuery({
    queryKey: ["reqGetanakbyid"],
    queryFn: () => reqGetanakbyid(id),
    onSuccess: (res) => {
      setItems(res);
    },
  });

  return (
    <SafeAreaView className="min-h-full bg-white">
      <Return to="Anak" parameter="Detail" />
      <ScrollView>
        <View>
          <Text className="text-xl font-semibold p-5">Data Anak</Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Nama - {items && items.nama}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Jenis Kelamin - {items && items.jenis_kelamin}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Tanggal lahir - {items && items.tanggal_lahir}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Anak ke - {items && items.anak_ke}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Keadaan Umum - {items && items.keadaan_umum}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Kesadaran - {items && items.kesadaran}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Kondisi saat lahir - {items && items.kondisi_saat_lahir}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Tekanan darah - {items && items.tekanan_darah}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Suhu - {items && items.suhu}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Dja - {items && items.dja}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Hr - {items && items.hr}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Rr - {items && items.rr}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Saturasi O2 - {items && items.saturasi_o2}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Capilary refill - {items && items.capilary_refill}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Bb - {items && items.bb}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Pb - {items && items.pb}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Lila - {items && items.lila}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Lk - {items && items.lk}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Ld - {items && items.ld}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Apperance - {items && items.apperance}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Grimace - {items && items.grimace}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Activity - {items && items.activity}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Respiration - {items && items.respiration}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Kepala - {items && items.kepala}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Uub - {items && items.uub}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Mata - {items && items.mata}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Tht - {items && items.tht}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Mulut - {items && items.mulut}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Thorax - {items && items.thorax}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Abdomen - {items && items.abdomen}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Tali pusat - {items && items.tali_pusat}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Punggung - {items && items.punggung}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Genetalia - {items && items.genetalia}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Anus - {items && items.anus}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Ekstermitas - {items && items.ekstermitas}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Kulit - {items && items.kulit}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Moro - {items && items.moro}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Rooting - {items && items.rooting}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Sucking - {items && items.sucking}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Swallowing - {items && items.swallowing}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Wallking - {items && items.wallking}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Graphs - {items && items.graphs}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Babinski - {items && items.babinski}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Tonicneck - {items && items.tonicneck}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Miksi - {items && items.miksi}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Defekasi - {items && items.defekasi}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Laboratorium - {items && items.laboratorium}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Usg - {items && items.usg}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Rontgen - {items && items.rontgen}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Terapi - {items && items.terapi}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Perawatan tali pusat - {items && items.perawatan_talipusat}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Imd - {items && items.imd}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Vitamin K1 - {items && items.vitamin_k1}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Imunisasi Hepatitis - {items && items.imunisasi_hepatitis}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Saleb - {items && items.saleb}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Kie - {items && items.kie}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Ppia - {items && items.ppia}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Pemantauan tumbuh kembang -{" "}
            {items && items.pemantauan_tumbuh_kembang}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detailanak;
