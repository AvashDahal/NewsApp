import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

type Props = {}

const SearchBar = (props: Props) => {
  return (
    <View style={styles.container}>
     <View style={styles.searchBar}>
        <Ionicons name='search-outline' size={24} color={Colors.lightGrey}/>
        <TextInput placeholder='Search' placeholderTextColor={Colors.lightGrey}
        style={styles.searchText}
        autoCapitalize='none'/>
     </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
    },
    searchBar:{
        backgroundColor:'#E4E4E4',
        paddingHorizontal:12,
        paddingVertical:14,
        borderRadius:10,
        flexDirection:"row",
        gap:10,
        marginBottom:20,

    },
    searchText:{
        fontSize:14,
        flex:1,
        color:Colors.darkGrey,

    },

})