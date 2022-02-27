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
{}
var photo = photoVal.photos[0];
export const deduce = (photo) =>{
  // let axiosConfig = {
  //   headers: {
  //       'Content-Type': 'application/json;charset=UTF-8',
  //       "Access-Control-Allow-Origin": "*",
        
  //   }
  // };
  // const res = axios.post('https://127.0.0.1:5000/predict', { file: photo.base64 },axiosConfig)
  // .then(function (response) {
  //   console.log(response);
  //   var resp = response;
  //   if (resp['data']["class_id"] == 0) {
  //     Alert.alert('This is non-Compostable');
  //   }
  //   else if (resp['data']["class_id"] == 1){
  //     Alert.alert('This is Compostable');
  //   }
  //   else{
  //     Alert.alert('This is non-Compostable');
  //   }
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
  let index = Math.floor(Math.random()*2); 
  let arr_label = ["Dummy thicc","Bio-Degradable","Non-Bio-Degradable"] ;

  Alert.alert(arr_label[index+1])
  
}



