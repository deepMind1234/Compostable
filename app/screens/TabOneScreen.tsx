import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { useRef, useState } from 'react';
import { Camera } from 'expo-camera';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [cameraStart, setCameraStart] = useState(false);
  const [photo, setPhoto] = useState<any>(null);

  let camera: Camera
  const cameraRef = useRef<Camera>(null);

  const __startCamera = async () => {
    const status = await Camera.requestCameraPermissionsAsync();
    status.granted === true ? setCameraStart(true) : Alert.alert('Permission Denied');
  }

  const __takePhoto = async () => {
    cameraRef.current?.takePictureAsync({ onPictureSaved: (photo) => {
      setPhoto(photo);
    }})
  };

  return (
    <View style={{
      flex: 1
    }}>
      {cameraStart ? (
        <Camera
        style={{flex: 1,width:"100%"}}
        ref={cameraRef}>
        
        <View
          style={{
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          flex: 1,
          width: '100%',
          padding: 20,
          justifyContent: 'space-between'
          }}
        >
        <View
          style={{
          alignSelf: 'center',
          flex: 1,
          alignItems: 'center'
          }}
        >
            <TouchableOpacity
              onPress={__takePhoto}
              style={{
              width: 70,
              height: 70,
              bottom: 0,
              borderRadius: 50,
              backgroundColor: '#fff'
            }}
            >
              <Text>Take Photo</Text>
            </TouchableOpacity>
          </View>
          </View> 
      </Camera>
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
      )}
    </View>
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
