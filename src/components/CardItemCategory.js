import {StyleSheet,Pressable} from 'react-native'
import ShadowCard from './wrappers/ShadowCard'
import { colors } from '../globals/colors'
import TextPrimary from './TextPrimary'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setProductsFilteredByCategory } from '../features/shopSlice'

const CardItemCategory = ({item:category}) => {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <Pressable onPress={()=> {
      dispatch(setProductsFilteredByCategory(category))
      navigation.navigate("ProductsByCategory",{category})

      }}>
      <ShadowCard style={styles.container} >
          <TextPrimary style={styles.text}>{category}</TextPrimary>
      </ShadowCard>
    </Pressable>
  )
}

export default CardItemCategory

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.accent,
        marginHorizontal:15,
        marginVertical:10,
        padding:50,
        alignItems:"center",
        justifyContent:"center",
        borderColor:colors.color1,
        borderWidth:3,
        borderRadius:7,
    },
    text:{
        color:colors.lightGray
    }
})