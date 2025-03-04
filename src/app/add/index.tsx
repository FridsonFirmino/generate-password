import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "@/styles/colors";
export default function Add() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={28} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Seleccione uma Categoria</Text>
    </View>
  );
}
