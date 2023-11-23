import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import Return from "../return/Return";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { reqGetnifasbyid } from "../../features/nifas/reqGetnifasbyid";

const Detailnifas = () => {
  const route = useRoute();
  const id = route.params.id;
  const [items, setItems] = useState([]);
  useQuery({
    queryKey: ["reqGetnifasbyid"],
    queryFn: () => reqGetnifasbyid(id),
    onSuccess: (res) => {
      setItems(res);
    },
  });

  return (
    <SafeAreaView className="min-h-full bg-white">
      <Return to="Nifas" parameter="Detail" />
      <ScrollView className="pb-10">
        <View>
          <Text className="text-xl font-semibold p-5">
            {items && items.status}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Keadaan umum - {items.keadaan_umum}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Kesadaran - {items.kesadaran}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Status emosional - {items.status_emosional}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Tekanan darah - {items.suhu_tubuh}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Suhu tubuh - {items.suhu_tubuh}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Pernafasan - {items.pernafasan}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Denyut nadi - {items.denyut_nadi}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Konjungtive - {items.konjungtiva}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Puting susu - {items.puting_susu}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Asi - {items.asi}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Tfu - {items.tfu}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Kontraksi uterus - {items.kontraksi_uterus}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Kandung kemih - {items.kandung_kemih}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Jahitan - {items.jahitan}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Oedema - {items.oedema}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Warnah lochea - {items.warnah_lochea}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Banyak lochea - {items.banyak_lochea}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Bau lochea - {items.bau_lochea}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Robekan anus - {items.robekan_anus}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Hemorid anus - {items.hemorid_anus}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Varises - {items.varises}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Oedema ekstermitas bawah - {items.oedema_ekstermitasbawah}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Gol. darah - {items.golongan_darah}
          </Text>
          <Text className="px-5 py-4 text-xl font-light">
            Hemoglobin - {items.hemoglobin}
          </Text>
          <Text className="px-5 bg-slate-100 py-4 text-xl font-light">
            Hematorit - {items.hematorit}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detailnifas;
