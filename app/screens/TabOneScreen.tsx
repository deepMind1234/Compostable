import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, TouchableOpacity, Button, Image} from 'react-native';
import { useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import photoVal from '../constants/Photos'

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [cameraStart, setCameraStart] = useState(false);
  const [photo, setPhoto] = useState<any>(null);

  const cameraRef = useRef<Camera>(null);

  const __startCamera = async () => {
    const status = await Camera.requestCameraPermissionsAsync();
    status.granted === true ? setCameraStart(true) : Alert.alert('Permission Denied');
  }
  const __pushPhoto = async (photo) => { 
	photoVal.photos.push(photo);
	console.log("Photo pushed!",photo);
	console.log("Photo array size :" + photoVal.photos.length)
	};

  const __takePhoto = async () => {
    if (!cameraRef) return;
    const data = await cameraRef.current?.takePictureAsync();
    // console.log(data);
	__pushPhoto(data)
    setPhoto(data);
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
            </TouchableOpacity>
              <Text>Take Photo</Text>
          </View>
          </View>

          <Button
            onPress={() => setCameraStart(false)}
            title="Go Back"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
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
              width: 60,
              borderRadius: 4,
              backgroundColor: '#66ff66',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40
            }}
          >
             <Image source={{uri: 'http://icons.iconarchive.com/icons/custom-icon-design/mono-general-3/512/camera-icon.png'}} style={{width: 50, height: 50}} />

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
