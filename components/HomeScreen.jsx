import { useState } from 'react';
import {TouchableOpacity, Image, Text, View, TextInput, Button} from 'react-native';

export default function HomeSreen({navigation,route }) {
    const {age,name}=route.params;

    return (
        <View style={{flexDirection: 'column'}}>
           <Text style={{borderColor:"black" ,borderWidth:1,padding:5,margin:5}}> hello {name}</Text>
           <Button color={"black"}  title={age<16?"Puzzle games":"Strategy games"} onPress={()=>{
               navigation.navigate('TrackScreen',
              { trackName:age<16?"Puzzle games":"Strategy games"}
               )
           }}/>
           <Button color={"black"} title={age<16?"Sport games":"Action games"} onPress={()=>{
               navigation.navigate('TrackScreen',
              { trackName:age<16?"Sport games":"Action games"}
               )
           }}/>

        </View>
    );
}