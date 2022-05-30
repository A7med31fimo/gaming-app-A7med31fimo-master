import { useState } from 'react';
import {TouchableOpacity, Image, Text, View, TextInput, Button} from 'react-native';

export default function WelcomeScreen({ navigation }) {
    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    return (
        <View style={{flexDirection: 'column'}}>
           <TextInput style={{borderColor:"black" ,borderWidth:1,padding:5,margin:5}} placeholder='enter your Name ' onChangeText={setName}/>
           <TextInput style={{borderColor:"black" ,borderWidth:1,padding:5 ,margin:5}} placeholder='enter your Age ' onChangeText={setAge}/>
           <Button color={"black"} title='To Next Page' onPress={()=>{navigation.navigate('HomeSreen',{age:age,name:name})}} />
        </View>
    );
}