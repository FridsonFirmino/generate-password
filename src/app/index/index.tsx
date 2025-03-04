import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { styles } from "@/app/index/style";
import { colors } from "@/styles/colors";

import { Links } from "@/components/links";
import { Option } from "@/components/option";
import { Categories } from "@/components/categories";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity activeOpacity={0.6} style={styles.btnAdd}>
          <MaterialIcons name="add" size={30} color={colors.gray[950]} />
        </TouchableOpacity>
      </View>

      <Categories />
      <Links />

      <Modal transparent visible={true}>
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
