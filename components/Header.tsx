import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

export const Colors = {
  black: '#000',
};

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/images/getting-started.png')} style={styles.userImg} />
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
  },
  userImg: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
