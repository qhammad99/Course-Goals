// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

////////////////////////////////////////////////////////////////////////////////////////////////
// Hello World

// import React from 'react';
// import {Text, View} from 'react-native';

// const App=() => {
//   return(
//     <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
//       <Text>
//         Try editing me! 🎉
//       </Text>
//     </View>
//   );
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////////////
// import React from 'react';
// import { View, Text, Image, ScrollView, TextInput } from 'react-native';

// const App = () => {
//   return (
//     <ScrollView>
//       <Text>Some text</Text>
//       <View>
//         <Text>Some more text</Text>
//         <Image
//           source={require('./photos/male.jpg')
//           }
//           style={{ width: 200, height: 200 }}
//         />
//       </View>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1
//         }}
//         defaultValue="You can type in me"
//       />
//     </ScrollView>
//   );
// }

// export default App;

/////////////////////////////////////////////////////////////////////////////////////////

import React, {useState} from 'react';
import { TextInput, StyleSheet, View, Button, Text, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


const App = () => {

  const [courseGoals, setCourseGoals] = useState([]);
  const [keyIndex, updateKeyIndex] = useState(1);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoal= goalTitle =>{
    setCourseGoals(currentGoals => [
      ...courseGoals, 
      {key: keyIndex.toString(), value: goalTitle}]);
    updateKeyIndex(keyIndex+1);
    setIsAddMode(false);
  };
  const removingGoal=(goalId)=>{
    setCourseGoals(
      currentGoals=>{
        return currentGoals.filter((goal)=>goal.key !== goalId);
      }
    );
  }

  return(
    <View style={styles.mainContainer}>
      <Text style={styles.topHeading}>Course Goals</Text>
      <Button title="Add New Goal" onPress={()=>setIsAddMode(true)}/>
      <GoalInput 
        AddMode={isAddMode} 
        onAddGoal={addGoal}
        onCancel={()=>setIsAddMode(false)}/>      
      
      <FlatList
      data={courseGoals} 
      renderItem={
        myFunc=> <GoalItem goalKey={myFunc.item.key} deleteGoal={removingGoal} goals={myFunc.item.value} />
      }/>
    </View>

  );
}

const styles = StyleSheet.create({
  topHeading:{
    textAlign:'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  mainContainer:{
    flex:1,
    paddingTop:20, 
    padding:50
  }
});
export default App;