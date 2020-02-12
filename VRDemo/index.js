import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment, 
  asset, 
  VrButton
} from 'react-360';

export default class VRDemo extends React.Component {
  btnClick(){
    console.log("btn click yo");
    Environment.setBackgroundImage(asset("/equirectangularTest.jpg"), );    
  }

  render() { 
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to Majority
          </Text>
        </View>
        <View style={styles.greetingBox}>
          <Text style={styles.gayGreeting}>
            A very gay welcome
          </Text>
        </View>
        <VrButton style={styles.btn} onClick= {() => this.btnClick()}> 
        <Text style={styles.greeting} >
            A very clickable btn
        </Text>
        </VrButton>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  btn: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    margin: 20
  },
  greeting: {
    fontSize: 30,
  }, 
  gayGreeting: {
    fontSize: 80,
  },
});

AppRegistry.registerComponent('VRDemo', () => VRDemo);
