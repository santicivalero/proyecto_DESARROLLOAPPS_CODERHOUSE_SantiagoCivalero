import { StyleSheet,FlatList,View,Text, ActivityIndicator} from 'react-native'
import CardItemCategory from './CardItemCategory'
import { useGetCategoriesQuery} from '../services/shop'
import { colors } from '../globals/colors'


const Categories = () => {

  const {data:categories,isError,error,isSuccess,isLoading} = useGetCategoriesQuery()

  //if(isLoading) return <View><Text>cargando</Text></View>
  if(isLoading) return <ActivityIndicator size="large" color={colors.primary} style={styles.spinner} />
  
  if(isError) return <View><Text>{error.message}</Text></View>
  
  return (
    <FlatList
    data={categories}
    keyExtractor={item => item}
    renderItem={({item})=> <CardItemCategory item={item}/>}
    contentContainerStyle={styles.containerCard}
  />
  )
}

export default Categories

const styles = StyleSheet.create({
  containerCard:{
    paddingBottom:60
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})