import { MaterialIcons } from "@expo/vector-icons";

type Category = {
  id: String;
  name: String;
  icon: keyof typeof MaterialIcons.glyphMap;
  isSelected: Boolean;
};

export const categories: Category[] = [
  { id: "1", name: "Curso", icon: "code", isSelected: true },
  { id: "2", name: "Site", icon: "language", isSelected: false },
  { id: "3", name: "Projecto", icon: "folder", isSelected: false },
  { id: "4", name: "Artigo", icon: "newspaper", isSelected: false },
  { id: "5", name: "Video", icon: "movie", isSelected: false },
  { id: "6", name: "Documentação", icon: "content-paste", isSelected: false },
];
