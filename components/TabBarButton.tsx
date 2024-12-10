import React, { useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Colors } from "@/constants/Colors";
import { icon } from "@/constants/Icons";
import Animated, { useAnimatedStyle, useSharedValue, withSpring, interpolate } from "react-native-reanimated";

interface TabBarButtonProps {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: keyof typeof icon; // Ensure it's a valid key in `icon`
  label: string;
}

const TabBarButton: React.FC<TabBarButtonProps> = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
  label,
}) => {
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withSpring(isFocused ? 1 : 0, { duration: 50 });
  }, [isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacityValue = interpolate(opacity.value, [0, 1], [1, 0]);
    return {
      opacity: opacityValue,
    };
  });

  // Render the icon dynamically based on routeName
  const renderIcon = icon[routeName] || icon.default;

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarBtn}
    >
      {renderIcon({
        color: isFocused ? Colors.tabIconSelected : Colors.tabIconDefault,
        focused: isFocused,
      })}

      <Animated.Text
        style={[
          {
            color: isFocused ? Colors.tabIconSelected : Colors.tabIconDefault,
            fontSize: 12,
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tabbarBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});

export default TabBarButton;
