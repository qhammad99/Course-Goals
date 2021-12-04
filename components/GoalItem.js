import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const GoalItem=(props)=>{
    return(
        <View style={styles.itemContainer}>
          <Text style={styles.itemStyle}>{props.goals}</Text>
          <Button title="X" 
          color='#34eb3a'
          onPress={props.deleteGoal.bind(this, props.goalKey)}/>
        </View>
    );
}

const styles = StyleSheet.create({

    itemContainer:{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:10,
        justifyContent:'space-between' 
    },

    itemStyle:{
        padding:10,
        width: '88%',
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'#ccc'
      }
});

export default GoalItem;