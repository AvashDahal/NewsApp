import { View, StyleSheet, LayoutChangeEvent, Dimensions } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabBarButton from "@/components/TabBarButton";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { useState } from "react";
import { Colors } from "@/constants/Colors";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const screenWidth = Dimensions.get('window').width
  const tabWidth = screenWidth / state.routes.length
  const tabPositionX = useSharedValue(0)

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: tabPositionX.value }]
  }))

  return (
    <View style={styles.tabBar}>
      <Animated.View 
        style={[
          styles.activeIndicator, 
          animatedIndicatorStyle,
          { width: tabWidth }
        ]} 
      />
     {state.routes.map((route, index) => {
  const { options } = descriptors[route.key];
  const label = options.title ?? route.name;
  const isFocused = state.index === index;

  console.log(`Tab Route: ${route.name}, Focused: ${isFocused}`);

  const onPress = () => {
    tabPositionX.value = withTiming(tabWidth * index, { duration: 250 });

    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return (
    <TabBarButton
      key={route.name}
      routeName={route.name}
      label={label}
      isFocused={isFocused}
      onPress={onPress}
      onLongPress={() =>
        navigation.emit({
          type: "tabLongPress",
          target: route.key,
        })
      }
    />
  );
})}

    </View>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  tabBarButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    color:Colors.tabIconDefault,
  },
  tabBarLabel: {
    fontSize: 12,
  },
  activeIndicator: {
    position: 'absolute',
    height: 3,
    backgroundColor: Colors.tint,
    bottom: 0,
    borderRadius: 2,
  },
})
