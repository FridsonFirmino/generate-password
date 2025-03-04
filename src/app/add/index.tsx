import { useState } from "react";
import { router } from "expo-router";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "@/styles/colors";

import { linkStorage } from "@/storage/link-storage";

import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
export default function Add() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleAdd = async () => {
    try {
      if (!category) {
        return Alert.alert("Aviso⚠️", "Seleccione a Categoria");
      }

      if (!name.trim()) {
        return Alert.alert("Aviso⚠️", "Informe o nome");
      }

      if (!url.trim()) {
        return Alert.alert("Aviso⚠️", "Informe a URL");
      }
      await linkStorage.save({
        id: new Date().getTime().toString(),
        name,
        url,
        category,
      });
      Alert.alert("Sucesso✅", "Novo Link adicionado 🥳", [
        {
          text: "OK",
          onPress: () => router.back(),
        },
      ]);
    } catch (error) {
      Alert.alert("Erro🚨", "Não foi possivel salvar o Link");
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.6} onPress={() => router.back()}>
          <MaterialIcons name="arrow-back" size={28} color={colors.gray[200]} />
        </TouchableOpacity>

        <Text style={styles.title}>Novo</Text>
      </View>
      <Text style={styles.label}>Seleccione uma Categoria</Text>
      <Categories onCategorySelect={setCategory} selected={category} />

      <View style={styles.form}>
        <Input placeholder="Nome" onChangeText={(e) => setName(e)} />
        <Input
          placeholder="Url"
          onChangeText={(e) => setUrl(e)}
          autoCapitalize="none"
        />
        <Button title="Adicionar" onPress={handleAdd} />
      </View>
    </View>
  );
}
