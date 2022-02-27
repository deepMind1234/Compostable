import { StyleSheet,Image } from 'react-native';
import photoVal from '../constants/Photos' 

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {


 const PhotoSection = () => { 
	const photoItems = photoVal.photos.map((photo,i) => { 
	console.log(typeof(photo.uri))
	// console.log(photoVal.photos.length)
			return (<Image key={i} source = {{ 
							uri : photo.uri
							}}
						/>);
	});

	return (
		<View>{photoItems}</View>
		);
}
  return (
    <View>
      <Text >Tab Two</Text>
      <View  lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
	  </View>
		<PhotoSection/>
	  <View> 
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
	</View>
  );
}
