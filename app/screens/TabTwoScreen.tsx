import { StyleSheet,Image,ScrollView } from 'react-native';
import photoVal from '../constants/Photos' 

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {


 const PhotoSection = () => { 
	
	if (photoVal.photos.length === 0 ) { 
		return (<View></View>);
		}
	const photoItems = photoVal.photos.map((photo,i) => { 
	console.log(typeof(photo.uri))
	// console.log(photoVal.photos.length)
			return (<Image style={{width:400,height:400}}key={i} source = {{ 
							uri : photo.uri
							}}
						/>);
	});

	return (
		<ScrollView>{photoItems}</ScrollView>
		);
}
  return (
    <View>
      <View  lightColor="#eee" darkColor="rgba(255,255,255,0.1)">
	  </View>
	  <PhotoSection/>
	  <View> 
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
    </View>
	</View>
  );
}
