import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';



type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Image source={require('../assets/images/getting-started.png')} style={styles.userImg} />
<View style={{gap:5}}>
    <Text style={styles.welcomeText}>
Welcome
    </Text>
    <Text style={styles.userNameText}>
        John Doe
    </Text>

</View>
      </View>
      <TouchableOpacity onPress={() => {}}>
        <Ionicons name="notifications-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom:20,
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  userInfo:{
    flexDirection:'row',
    alignItems:"center",
    gap:10,


  },
  welcomeText:
  {
    fontSize:12,
    color:Colors.darkGrey,

  },
  userNameText:{
    fontSize:14,
    fontWeight:"700",
    color:Colors.black,

  },
});
