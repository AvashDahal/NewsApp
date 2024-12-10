import { Feather } from "@expo/vector-icons";

// Define the icon keys explicitly to avoid errors
type IconKey = "index" | "discover" | "saved" | "settings"; 

interface IconProps {
  color: string;
  focused: boolean;
}

export const icon: Record<IconKey, (props: IconProps) => JSX.Element> = {
  index: ({ color, focused }: IconProps) =>
    focused ? (
      <Feather name="home" size={24} color={color} />
    ) : (
      <Feather name="home" size={24} color={color} />
    ),
  discover: ({ color, focused }: IconProps) =>
    focused ? (
      <Feather name="search" size={25} color={color} />
    ) : (
      <Feather name="search" size={25} color={color} />
    ),
  saved: ({ color, focused }: IconProps) =>
    focused ? (
      <Feather name="book" size={22} color={color} />
    ) : (
      <Feather name="book" size={22} color={color} />
    ),
  settings: ({ color, focused }: IconProps) =>
    focused ? (
      <Feather name="settings" size={24} color={color} />
    ) : (
      <Feather name="settings" size={24} color={color} />
    ),
  // Add a fallback icon for undefined routeNames
  default: ({ color }: { color: string }) => (
    <Feather name="help-circle" size={24} color={color} />
  ),
};
