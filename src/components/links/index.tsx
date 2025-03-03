import { FlatList } from "react-native";

import { styles } from "./style";
import { Link } from "@/components/link";
import { links } from "@/utils/links";
export function Links() {
  return (
    <FlatList
      data={links}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Link name={item.name} onDetails={() => {}} url={item.url} />
      )}
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={true}
    />
  );
}
