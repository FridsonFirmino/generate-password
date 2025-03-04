import { FlatList } from "react-native";

import { styles } from "./style";
import { Link } from "@/components/link";
import { links } from "@/utils/links";

import { LinkStorageProps } from "@/storage/link-storage";

type linksProps = {
  data: LinkStorageProps[];
  openModal: (selected: LinkStorageProps) => void;
};
export function Links({ data, openModal }: linksProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Link
          name={item.name}
          onDetails={() => openModal(item)}
          url={item.url}
        />
      )}
      style={styles.container}
      contentContainerStyle={styles.content}
      showsHorizontalScrollIndicator={true}
    />
  );
}
