import photoVal from '../constants/Photos'; 
import { Alert, StyleSheet,ScrollView,TouchableOpacity, Button, Image} from 'react-native';
import axios from "axios";
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

var photo = photoVal.photos[0];
const formData = new FormData();

  formData.append('file',photo.base64 );
  axios.post('http://localhost:5000/predict', {formData})
  .then(function (response) {
    console.log(response);
    var resp = response
  })
  .catch(function (error) {
    console.log(error);
  });

  if ( resp[0] == 0) {
    Alert.alert('This is non-Compostable');
  }
  else if (resp[0] == 1){
    Alert.alert('This is Compostable');
  }
  else{
    Alert.alert('This is non-Compostable');
  }


