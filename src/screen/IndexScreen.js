import React, { useContext } from 'react'
import { View, StyleSheet, Text, FlatList,Button } from 'react-native'
import {Context} from '../context/BlogContext'

const IndexScreen = () => {
    const { state, addBlogPost } = useContext(Context)
    return (
        <View>
            <Text>this is index screen</Text>
            <Button
            title='Add Post'
            onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
     buttonStyle:{
         color:'white'
     }
})

export default IndexScreen