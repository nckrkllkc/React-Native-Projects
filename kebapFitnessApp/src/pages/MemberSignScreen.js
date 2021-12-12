import React from 'react'
import { SafeAreaView, Text,StyleSheet } from 'react-native'
import Input from '../components/Input/Input'

export default function MemberSign() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Member Sign</Text>
            <Input label="Ad - Soyad" placeholder="Boş bırakılamaz..."/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{

    },
})