import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { Camera } from 'expo-camera';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [camerai, setCamera] = useState(false);

  const __startCamera = async () => {
    const status = await Camera.requestCameraPermissionsAsync();
    if (status.granted === true) {
      setCamera(true);
    } else {
      Alert.alert('Permission Denied');
    }
  }

  const camCord = () => {
    return (camerai ? (
      <>
      <Text>Hiiiiii</Text>
      <Camera
        style={{flex: 1,width:"100%"}}
      ></Camera>
      <Text>Camera</Text>
      </>
      //<Text style={styles.container}>Camera</Text>
      ) : (
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TouchableOpacity
          onPress={__startCamera}
          style={{
            width: 130,
            borderRadius: 4,
            backgroundColor: '#14274e',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 40
          }}
        >
          <Text
            style={{
              color: '#fff',
              fontWeight: 'bold',
              textAlign: 'center'
            }}
          >
            Take picture
          </Text>
        </TouchableOpacity>
      </View>
      )
    )
  }

  return (
    <div>{camCord()}</div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 10,
    width: '80%',
  },
});
