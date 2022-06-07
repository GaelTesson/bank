import { View, Text } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-web'

const UserResume = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Card style={{ width: 270, height: 280, alignItems: 'center', justifyContent: 'center' , marginBottom:10}}>
                <Text>UserResume</Text>

            </Card>
        </View>
            
        
    )
}

export default UserResume