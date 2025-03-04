import { useCallback, useState } from "react";
import { router, useFocusEffect } from "expo-router";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "@/app/index/style";
import { colors } from "@/styles/colors";

import { linkStorage, LinkStorageProps } from "@/storage/link-storage";

import { Links } from "@/components/links";
import { Option } from "@/components/option";
import { Categories } from "@/components/categories";
import { categories } from "@/utils/categories";

export default function Index() {
  const [category, setCategory] = useState(categories[0].name);
  const [links, setLinks] = useState<LinkStorageProps[]>([]);

  const getLinks = async () => {
    try {
      const links = await linkStorage.get();
      const newLinks = links.filter((link) => link.category === category);
      setLinks(newLinks);
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel listar os links");
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getLinks();
    }, [category])
  );

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
      <Links data={links} />

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
