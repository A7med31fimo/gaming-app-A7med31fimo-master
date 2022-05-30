import { useState } from 'react';
import {TouchableOpacity, Image, Text, View, TextInput, Button} from 'react-native';

export default function HomeSreen({navigation,route }) {
    const {name}=route.params;

    return (
        <View style={{
            flex:1,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center'
            }}>
        <Text style={{fontSize:18,fontStyle:'italic',fontVariant:22}}>{name} </Text>
        </View>
    );
}