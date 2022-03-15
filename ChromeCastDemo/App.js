/* eslint-disable consistent-this */
import React, {Component} from 'react';
import {
  StatusBar,
  View,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';

/* Lib */

import Video from 'react-native-video';

// Native Module
class App extends Component {
  /**
   * Life cycle
   */

  constructor(props) {
    super(props);

    this.state = {};
  }
  async componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="light-content" />

        <Video
          source={{
            uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/CastVideos/mp4/BigBuckBunny.mp4',
          }} // Can be a URL or a local file.
          ref={ref => {
            this.player = ref;
          }} // Store reference
          controls={true}
          style={{height: '30%', width: '100%', backgroundColor: 'black'}}
          paused={false}
        />
        <TouchableOpacity
          style={{
            height: 50,
            width: '80%',
            alignSelf: 'center',
            backgroundColor: 'blue',
            marginTop: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>Cast</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default App;
