import * as React from 'react';
import { View, Text } from 'react-native';




export default function SettingsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 35, backgroundColor: 'pink' }}>
            <Text
                onPress={() => navigation.navigate('Landing')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Log Out</Text>
        </View>
    );
}