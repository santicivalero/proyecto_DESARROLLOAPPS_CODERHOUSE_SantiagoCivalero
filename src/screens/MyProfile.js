import { StyleSheet, View,Image,Text } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import { useNavigation } from '@react-navigation/native'
import { useGetUserQuery } from '../services/user'
import { useSelector } from 'react-redux'
import { colors } from '../globals/colors';


const MyProfile = () => {

    const navigation = useNavigation()
    const localId = useSelector(state => state.user.localId)
    const {data:user,isLoading} = useGetUserQuery({localId})


    if(isLoading) return <View><Text>Cargando</Text></View>
    
  return (
    <View style={styles.container}>
      <View style={styles.imageFrame}>
      <Image
        source={user?.image ? {uri:user.image}:require("../../assets/profile_default.png")}
        resizeMode='cover'
        style={styles.image}
      />
      </View>
      <SubmitButton title="Agregar imagen de perfil" onPress={()=>navigation.navigate("ImageSelector")}/>
      <SubmitButton title="Agregar localización" onPress={()=>{navigation.navigate("LocationSelector")}}/>
      <View>
        <Text style={styles.address}>{user?.address}</Text>
      </View>
    </View>
  )
}

export default MyProfile

const styles = StyleSheet.create({
    container:{
        marginTop:70,
        alignItems:"center",
        gap:20
    },
    image:{
        width:150,
        height:150
    },
    imageFrame:{
        width:150,
        height:150,
        borderRadius:"50%",
        overflow:"hidden",
        borderColor:colors.color1,
        borderWidth:2,
    },
    address:{
      fontFamily:"londrinaLight",
    }
})