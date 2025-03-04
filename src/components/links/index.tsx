import { FlatList } from "react-native";

import { styles } from "./style";
import { Link } from "@/components/link";
import { links } from "@/utils/links";

import { LinkStorageProps } from "@/storage/link-storage";

type linksProps = {
  data: LinkStorageProps[];
};
export function Links({ data }: linksProps) {
  return (
    <FlatList
      data={data}
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
