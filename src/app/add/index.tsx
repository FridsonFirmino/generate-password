import { useState } from "react";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "./style";
import { colors } from "@/styles/colors";

import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
export default function Add() {
  const [category, setCategory] = useState("Curso");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");

  const handleAdd = () => {
    console.log({ name, url });
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
