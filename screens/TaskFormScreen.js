import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import { TextInput } from 'react-native-gesture-handler'
import { saveTask } from '../api'

const TaskFormScreen = ({ navigation }) => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const handleChange = (name, value) => setTask({ ...task, [name]: value })

    const handleSubmit = () => {
        saveTask(task)
        navigation.navigate('Home')
    }


    return (
        <Layout>
            <TextInput
                placeholder="Write a title"
                placeholderTextColor='#ffffff50'
                style={styles.input}
                onChangeText={(text) => handleChange('title', text)}
            />
            <TextInput
                placeholder="Write a Description"
                placeholderTextColor='#ffffff50'
                style={styles.input}
                onChangeText={(text) => handleChange('description', text)}
            />
            <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
                <Text style={styles.buttonText} >Save Task</Text>
            </TouchableOpacity>
        </Layout>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        color: '#ffffff',
        fontSize: 16,
        marginBottom: 7,
        borderWidth: 1,
        borderColor: '#10ac84',
        height: 35,
        padding: 8,
        borderRadius: 4
    },
    buttonSave: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: '#10ac84',
        width: '90%',
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center'
    }
})

export default TaskFormScreen