import { useState } from "react";
import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "@/app/index/style";
import { colors } from "@/styles/colors";

import { Links } from "@/components/links";
import { Option } from "@/components/option";
import { Categories } from "@/components/categories";
import { categories } from "@/utils/categories";

export default function Index() {
  const [category, setCategory] = useState(categories[0].name);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => router.navigate("/add")}
          style={styles.btnAdd}
        >
          <MaterialIcons name="add" size={30} color={colors.gray[950]} />
        </TouchableOpacity>
      </View>

      <Categories onCategorySelect={setCategory} selected={category} />
      <Links />

      <Modal transparent visible={false}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalCategory}>Site</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <MaterialIcons
                  name="close"
                  size={15}
                  color={colors.gray[400]}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.modalLinkName}>Youtube</Text>
            <Text style={styles.modalLinkUrl}>https://www.youtube.com/</Text>

            <View style={styles.modalFooter}>
              <Option
                name="Excluir"
                icon="delete"
                variant="secondary"
                onPress={() => {}}
              />
              <Option name="Abrir" icon="language" onPress={() => {}} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
