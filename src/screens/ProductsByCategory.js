import { FlatList, StyleSheet, View,Text, ActivityIndicator} from 'react-native'
import { useEffect, useState } from 'react'
import Search from '../components/Search'
import CardProduct from '../components/CardProduct'
import { useGetProductsQuery } from '../services/shop'
import { colors } from '../globals/colors'



const ProductsByCategory = ({route}) => {
  
  const {category} = route.params
  const {data,isSuccess,isError,error,isLoading} = useGetProductsQuery(category)
  const [keyword,setKeyword] = useState("")
  const [products,setProducts] = useState([])

  useEffect(()=>{
    if(isSuccess){
      setProducts(Object.values(data))
    }
  },[isSuccess,data])

  useEffect(()=>{
 
   if(isSuccess){
    setProducts(Object.values(data).filter(product => product.name.includes(keyword)))
   }

  },[keyword,isSuccess])

  if(isLoading) return <ActivityIndicator size="large" color={colors.primary} style={styles.spinner} />
  if(isError) return <View><Text>{error.message}</Text></View>



  return (
    <View style={styles.container}>
      <Search  onChangeKeyword ={(t)=> setKeyword(t)}/>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item})=> (<CardProduct product={item}/>)}
      />
    </View>
  )
}

export default ProductsByCategory

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
})