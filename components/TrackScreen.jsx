import { useState ,useEffect} from 'react';
import {TouchableOpacity, Image, Text, View, TextInput, Button} from 'react-native';


export default function TrackScreen({navigation,route }) {
    const {trackName}=route.params;
    const[name,setname]=useState([])

function getGame(){
 
   if(trackName==="Puzzle games")
   setname(["Minesweeper","Chess"])
   else if(trackName==="Sport games")
   setname(["Football","Tennis"])
   else if(trackName==="Strategy games")
   setname(["Age of Empires","Strong Hold"])
   else 
   setname(["Shooter","Fighting"])
}


useEffect(()=>

getGame()
  
  ,[]);


    return (
        <View >
           <Button color={"black"}  title={name[0] }
        onPress={()=>{
            navigation.navigate("GameScreen",{name:name[0]})
        }}
        
        />
           <Button color={"black"} title={name[1]}
        
        onPress={()=>{
            navigation.navigate("GameScreen",{name:name[1]})
        }}
        />
        </View>
    );
}