import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Alert,
  ActivityIndicator
} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome5';

// Constants
const fontSizeVal = 15;
const iconSize = 20;

export default function App() {

  // Alert Message
  const alert = message => Alert.alert(message);

  return (
    <SafeAreaView>
      <ScrollView >
        <View style={styles.cover}>

          {/*First Button Group*/}
          <Pressable onPress={() => alert("DEFAULT Presses")}>
            <Text style={styles.defaultStyle} >DEFAULT</Text>
          </Pressable >
          <Pressable onPress={() => alert("ICON Pressed")}>
            <View style={styles.inline}>
              <Icon name="camera" type="FontAwesome" size={iconSize} color="#5463FF" style={{margin: 5, }} />
              <Text style={styles.defaultStyle} >ICON </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => alert("LOADING Pressed")}>
            <View style={styles.inline}>
              <ActivityIndicator size="small" color="#5463FF" style={{margin: 5, }} />
              <Text style={styles.defaultStyle} >LOADING </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => alert("DEFAULT Presses")}>
            <Text style={styles.lightBackground} >DEFAULT </Text>
          </Pressable >
          <Pressable onPress={() => alert("ICON Pressed")} style={styles.lightBackground}>
            <View style={styles.inline}>
                <Icon name="camera" type="FontAwesome" size={iconSize} color="#5463FF" style={{margin: 5, }} />
                <Text style={styles.defaultStyle}>ICON </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => alert("LOADING Pressed")} style={styles.lightBackground}>
            <View style={styles.inline}>
                <ActivityIndicator size="small" color="#5463FF" style={{margin: 5, }} />
                <Text style={styles.defaultStyle}>LOADING </Text>
            </View>
          </Pressable>

          <Pressable onPress={() => alert("DEFAULT Presses")} style={styles.solidBackground}>
            <Text style={styles.whiteText}>DEFAULT </Text>
          </Pressable >
          <Pressable onPress={() => alert("ICON Pressed")} style={styles.solidBackground}>
            <View style={styles.inline}>
                <Icon name="camera" type="FontAwesome" size={iconSize} color="white" style={{margin: 5, }} />
                <Text style={styles.whiteText}>ICON </Text>
            </View>
          </Pressable>
          <Pressable onPress={() => alert("LOADING Pressed")} style={styles.solidBackground}>
            <View style={[styles.inline, styles.whiteText]}>
                <ActivityIndicator size="small" color="white" style={{margin: 5, }} />
                <Text style={styles.whiteText}>LOADING </Text>
            </View>
          </Pressable>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  cover: {
    flex:1,
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column"
  },

  defaultStyle: {
    color: '#5463FF',
    fontSize: fontSizeVal,
    fontWeight: 'bold',
    margin: 5,
  },

  inline: {
    flexDirection: 'row',
  },

  lightBackground: {
    backgroundColor: 'white',
    border: 'solid',
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    color: '#5463FF',
    fontSize: fontSizeVal,
    fontWeight: 'bold',
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },

  solidBackground: {
    backgroundColor: '#5463FF',
    border: 'solid',
    borderColor: 'grey',
    borderRadius: 5,
    borderWidth: 1,
    color: 'white',
    fontSize: fontSizeVal,
    fontWeight: 'bold',
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },

  whiteText: {
    color: 'white',
    fontSize: fontSizeVal,
    fontWeight: 'bold',
    margin: 5,
  }

});