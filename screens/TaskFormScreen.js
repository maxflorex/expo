import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { TextInput } from 'react-native-gesture-handler'
import { getTask, saveTask, updateTask } from '../api'

const TaskFormScreen = ({ navigation, route }) => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const [editing, setEditing] = useState(false)

    const handleChange = (name, value) => setTask({ ...task, [name]: value })

    const handleSubmit = async () => {
        try {
            if (!editing) {
                saveTask(task)
            } else {
                updateTask(route.params.id, task)
            }
            navigation.navigate('Home')
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        if (route.params && route.params.id) {
            setEditing(true)
            navigation.setOptions({ headerTitle: 'Updating a Task' });

            (async () => {
                const task = await getTask(route.params.id)
                setTask({ title: task.title, description: task.description })
            })()
        }
    }, [])

    return (
        <Layout>
            <TextInput
                placeholder="Write a title"
                placeholderTextColor='#ffffff50'
                style={styles.input}
                onChangeText={(text) => handleChange('title', text)}
                value={task.title}
            />
            <TextInput
                placeholder="Write a Description"
                placeholderTextColor='#ffffff50'
                style={styles.input}
                onChangeText={(text) => handleChange('description', text)}
                value={task.description}
            />

            {!editing ? (
                <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit}>
                    <Text style={styles.buttonText} >Save Task</Text>
                </TouchableOpacity>

            ) : (
                <TouchableOpacity style={styles.buttonUpdate} onPress={handleSubmit}>
                    <Text style={styles.buttonText} >Update Task</Text>
                </TouchableOpacity>
            )}
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
    },
    buttonUpdate: {
        padding: 10,
        paddingBottom: 10,
        borderRadius: 5,
        marginBottom: 3,
        backgroundColor: "#e58e26",
        width: '90%'

    }
})

export default TaskFormScreen