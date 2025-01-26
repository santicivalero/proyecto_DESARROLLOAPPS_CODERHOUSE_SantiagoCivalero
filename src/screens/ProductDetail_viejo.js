import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../features/cartSlice';
import { Modal, StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Header from '../components/Header';
import { useGetProductCartQuery, usePostCartMutation } from '../services/cart'
import Counter from '../components/Counter';
import { colors } from '../globals/colors';
import images from '../../imageAssets.js';
import { useNavigation } from '@react-navigation/native';

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  const imageSource = images[product.img];
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddToCart = () => {
    if (quantity <= 0) return;
    const productWithQuantity = { ...product, quantity };
    dispatch(addProduct(productWithQuantity));
    // dispatch(addProduct(product));
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Counter onQuantityChange={setQuantity} />
      <Pressable style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.textButton}>Agregar al carrito</Text>
      </Pressable>

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <View style={styles.modalContainer}>
          {quantity > 1 ? 
          <Text style={styles.modalText}>Productos agregados al carrito</Text> 
          : 
          <Text style={styles.modalText}>Producto agregado al carrito</Text>
          }
          <Pressable>
            <Text style={styles.modalTextCarrito} 
                  onPress={() => navigation.navigate('CartStack', { screen: 'Cart' })}>
              Ir al carrito
              </Text>
          </Pressable>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.closeModal}>Cerrar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  // ... tus estilos existentes
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
    //fontWeight:"bold",
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
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  modalText: {
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'londrinaRegular',
    borderColor: colors.primary,
    borderWidth: 4
  },
  modalTextCarrito: {
    backgroundColor: colors.color1,
    padding: 10,
    marginTop: 70,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'londrinaRegular',
    borderColor: colors.primary,
    borderWidth: 4
  },
  closeModal: {
    marginTop: 40,
    color: colors.primary,
    fontSize: 24,
    fontFamily: 'londrinaRegular',
    borderColor: colors.color1,
    borderRadius: 10,
    padding: 8,
    borderWidth: 4
  },
});






// import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
// import Header from '../components/Header'
// import { colors } from '../globals/colors'
// import images from '../../imageAssets.js';

// const ProductDetail = ({route}) => {

//   const {product} = route.params
//   const imageSource = images[product.img]

//   return (
//     <View style={styles.container}>
//       <Image source={imageSource} style={styles.image} resizeMode='contain'/>
//       <Text style={styles.name}>{product.name}</Text>
//       <Text style={styles.description}>{product.description}</Text>
//       <Text style={styles.price}>${product.price}</Text>
//       <Pressable style={styles.button}>
//         <Text style={styles.textButton}>Agregar al carrito</Text>
//       </Pressable>
//     </View>
//   )
// }

// export default ProductDetail

// const styles = StyleSheet.create({
//   container:{
//     gap:10
//   },
//   image:{
//     width:"100%",
//     height:200,
//     backgroundColor: colors.color1
//   },
//   name:{
//     fontSize:20,
//     fontWeight:"bold",
//     textAlign:"center",
//     paddingVertical:20,
//     fontFamily:"londrinaRegular"
//   },
//   description:{
//     fontSize:14,
//     padding:20,
//     textAlign:"center",
//     fontFamily:"londrinaLight"
//   },
//   price:{
//     fontSize:20,
//     paddingHorizontal:50,
//     paddingVertical:20,
//     textAlign:"right",
//     fontFamily:"londrinaRegular",
//     textAlign:"center"
//   },
//   button:{
//     backgroundColor:colors.accent,
//     marginHorizontal:10,
//     padding:10,
//     alignItems:"center",
//     borderRadius:6
//   },
//   textButton:{
//     fontSize:20,
//     color:colors.lightGray,
//     fontFamily:"londrinaLight"
//   }
// })