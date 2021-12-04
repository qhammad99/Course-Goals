import React, {useState} from 'react';
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native';

const GoalInput = (props) =>{
    const [enteredGoal, setEnteredGoal] = useState('');
    const textUpdate=(enteredText)=>{
        setEnteredGoal(enteredText);
    };

    const addClicker=()=>{
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }
    return(
        <Modal visible={props.AddMode}>
        <View style={styles.inputHolder}>        
                <TextInput
                style={styles.inputGoal}
                placeholder="Enter Goal"
                placeholderTextColor= '#bfc7f5' 
                onChangeText={textUpdate}
                value={enteredGoal}/>

            <View style={styles.buttonController}>
                <View style={{width:'40%'}}>
                    <Button
                    title="ADD"
                    onPress={addClicker}/>
                </View>

                <View style={{width:'40%'}}>
                    <Button
                    title="CANCEL"
                    color= 'red'
                    onPress={props.onCancel}/>
                </View>
            </View>
        </View>
        </Modal>
    );
}

const styles= StyleSheet.create({
    inputHolder:{
        flex:1,
        alignItems:'center',
        justifyContent:'center' 
      },
    
    inputGoal:{
        width:'80%', 
        borderWidth:1, 
        borderColor:'black', 
        paddingHorizontal:10,
        marginBottom:10,
        color: '#0e1747'
},

    buttonController:{
        flexDirection:'row',
        justifyContent: 'space-evenly',
        width: '80%'
    }
});

export default GoalInput;