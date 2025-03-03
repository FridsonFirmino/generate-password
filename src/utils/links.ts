//import { MaterialIcons } from "@expo/vector-icons";

type Link = {
  id: string;
  name: string;
  url: string;
  onDetails?: () => void;
};

export const links: Link[] = [
  { id: "1", name: "Youtube", url: "https://www.youtube.com/" },
  { id: "2", name: "Instagram", url: "https://www.instagram.com/" },
  { id: "3", name: "Facebook", url: "https://www.facebook.com/?locale=pt_BR" },
  { id: "4", name: "X", url: "https://x.com/" },
  { id: "5", name: "Tiktok", url: "https://www.tiktok.com/explore" },
];
