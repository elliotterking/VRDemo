import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  asset,
  VrButton,
  staticAssetURL
} from 'react-360';
import Entity from 'Entity';
import VideoModule from 'VideoModule';

export default class VRDemo extends React.Component {
  state = {
    count: 0,
  };


  _incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    //setInterval(this._incrementCount, 1000);
  }

  btnClick() {
    this._incrementCount();

    // Create a player
    const player = VideoModule.createPlayer('myplayer');
    // Play a specific video
    player.play({
      source: { url: staticAssetURL('ShowerFalls.mp4') }, // provide the path to the video
    });
    // Display the background video on the Environment
    Environment.setBackgroundVideo('myplayer');


    //Environment.setBackgroundImage(asset("/equirectangularTest.jpg"));
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
        <VrButton style={styles.btn} onClick={() => this.btnClick()}>
          <Text style={styles.greeting} >
            A very clickable btn
        </Text>
        </VrButton>


        <Entity
          source={{ gltf2: asset('pentagon/scene.gltf') }}
          style={{
            transform: [
              { translate: [-5, 0, -3] }
            ]
          }}
        />
        <Text style={styles.greeting}>
          {`Count: ${this.state.count}`}
        </Text>

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
