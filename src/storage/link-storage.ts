import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "links-storage";

export type LinkStorageProps = {
  id: string;
  name: string;
  url: string;
  category: string;
};

async function get(): Promise<LinkStorageProps[]> {
  try {
    const links = await AsyncStorage.getItem(LINKS_STORAGE_KEY);
    if (links) {
      return JSON.parse(links) as LinkStorageProps[];
    }
    return [];
  } catch (error) {
    throw Error;
  }
}

async function save(newLink: LinkStorageProps) {
  try {
    const links = await get();
    const updatedLinks = [...links, newLink];
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(updatedLinks));
  } catch (error) {
    throw Error;
  }
}

async function deleteById(id: string) {
  try {
    const links = await get();
    const updatedLinks = links.filter((link) => link.id !== id);
    await AsyncStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(updatedLinks));
  } catch (error) {
    throw Error;
  }
}

export const linkStorage = {
  get,
  save,
  deleteById,
};
