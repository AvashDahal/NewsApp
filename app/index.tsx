import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { Colors } from "@/constants/Colors";
import { FONT_PATHS } from "@/config";
import Animated, { FadeInDown, FadeInRight } from "react-native-reanimated";

const Page = () => {
  const router = useRouter();
  

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="transparent" />
      <ImageBackground
        source={require("../assets/images/getting-started.png")}
        style={{flex:1}}
        blurRadius={5}
        resizeMode="cover"
      >
        <View style={styles.wrapper}>
        <Animated.Text style={styles.title} entering={FadeInRight.delay(300).duration(500)}>Stay Updated!</Animated.Text>
        <Animated.Text style={styles.subtitle} entering={FadeInRight.delay(800).duration(700)}>Get breaking news and personalized updates directly to your feed.</Animated.Text>
        <Animated.View entering={FadeInDown.delay(1200).duration(300)}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: Colors.tint }]}
          onPress={() => router.replace("/(tabs)")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
          
        </Animated.View>


        </View>
       
      </ImageBackground>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  wrapper:
  {
    flex:1,
    justifyContent:"flex-end",
    paddingBottom:20,
    paddingHorizontal:30,
    gap:10,
    backgroundColor:'rgba(0,0,0,0.5)'

  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    letterSpacing:1.5,
    lineHeight:36,
    color: "white",
    textAlign:"center",
    marginBottom: 8,
    fontFamily:FONT_PATHS.SpaceMono,
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginBottom: 32,
    letterSpacing:1.2,
    textAlign: "center",
    fontFamily:FONT_PATHS.SpaceMono,
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 24,
    marginVertical:20,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
   
    fontFamily:FONT_PATHS.SpaceMono,
  },
});