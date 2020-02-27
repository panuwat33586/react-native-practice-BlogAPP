import React,{useContext} from 'react'
import {View,StyleSheet,Text,FlatList} from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen=()=>{
    const blogPosts =useContext(BlogContext)
    return(
        <View>
           <Text>this is index screen</Text>
           <FlatList
           data={blogPosts}
           keyExtractor={blogPost=>blogPost.title}
           renderItem={({item})=>{
           return <Text>{item.title}</Text>
           }}
           />
        </View>
    )
}

const styles=StyleSheet.create({

})

export default IndexScreen