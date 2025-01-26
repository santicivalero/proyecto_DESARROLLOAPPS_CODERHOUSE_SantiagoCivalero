import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import { colors } from '../globals/colors'
import images from '../../imageAssets.js';
import { useGetProductCartQuery, usePostCartMutation } from '../services/cart'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Counter from '../components/Counter'
import { useState, useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { reset } from "../features/counterSlice";

const ProductDetail = ({route}) => {
  
  const [quantity,setQuantity] = useState(0)
  const navigation = useNavigation()
  const {product} = route.params
  const imageSource = images[product.img];
  const localId = useSelector(state => state.user.localId)
  const dispatch = useDispatch();
  const [triggerAddProduct] = usePostCartMutation()
  const {data:productCart} = useGetProductCartQuery({localId,productId:product.id})

  
  const cartQuantity = productCart ? productCart.quantity : 0;
  const availableStock = product.stock - cartQuantity


  useFocusEffect(
    useCallback(() => {
      dispatch(reset());
    }, [dispatch])
  );


  const  handleAddproduct = async () => {

    const cartQuantity = productCart ? productCart.quantity : 0
    if((product.stock - cartQuantity) === 0 ) return
    const newQuantity = quantity + cartQuantity
    const cartProduct = {
      ...product,
      quantity:newQuantity
    }
    await triggerAddProduct({localId,cartProduct})
    setQuantity(0)
    navigation.navigate("CartStack")
  }

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Counter quantity={quantity} onQuantityChange={setQuantity} maxStock={availableStock} />
      <Pressable style={styles.button} onPress={handleAddproduct}>
        <Text style={styles.textButton}>Agregar al carrito</Text>
      </Pressable>
    </View>
  );
}

export default ProductDetail

const styles = StyleSheet.create({
  container:{
    gap:10,
    flex:1
  },
  image:{
    width:"100%",
    height:200,
    backgroundColor: colors.color1
  },
  name:{
    fontSize:20,
    textAlign:"center",
    paddingVertical:20,
    fontFamily:"londrinaRegular"
  },
  description:{
    fontSize:14,
    paddingHorizontal:20,
    textAlign:"center",
    fontFamily:"londrinaLight"
  },
  price:{
    fontSize:20,
    paddingHorizontal:50,
    paddingVertical:20,
    textAlign:"right",
    fontFamily:"londrinaRegular",
    textAlign:"center"
  },
  button:{
    backgroundColor:colors.accent,
    marginHorizontal:10,
    marginVertical:16,
    padding:10,
    alignItems:"center",
    borderRadius:6
  },
  textButton:{
    fontSize:20,
    color:colors.lightGray,
    fontFamily:"londrinaLight"
  }
});