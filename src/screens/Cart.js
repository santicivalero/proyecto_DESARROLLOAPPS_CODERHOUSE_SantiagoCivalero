import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, clearCart } from '../features/cartSlice';
import { Modal, StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import CardCartProduct from '../components/CardCartProduct';
import { colors } from '../globals/colors';
import { usePostOrdersMutation } from '../services/orders';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const dispatch = useDispatch();
  const [triggerPost] = usePostOrdersMutation();

  const confirmCart = () => {
    setConfirmVisible(false);
    triggerPost({ id: '2', products: cart.products, total: cart.total });
    dispatch(clearCart());
  };

  const handleRemoveProduct = (productId) => {
    dispatch(removeProduct(productId));
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart.products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardCartProduct
            product={item}
            onRemove={() => setModalVisible(item.id)}
          />
        )}
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
      <View style={styles.containerTotal}>
        <Text style={styles.text}>Total: {cart.total}$ ARG </Text>
        <Pressable style={styles.button} onPress={() => setConfirmVisible(true)}>
          <Text style={styles.buttonText}>Finalizar Compra</Text>
        </Pressable>
      </View>

      {/* Modal para eliminar producto */}
      <Modal transparent={true} visible={!!modalVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>¿Eliminar producto?</Text>
          <View style={styles.modalButtonsContainer}>
          <Pressable onPress={() => handleRemoveProduct(modalVisible)}>
            <Text style={styles.confirmText}>Sí</Text>
          </Pressable>
          <Pressable onPress={() => setModalVisible(false)}>
            <Text style={styles.cancelText}>No</Text>
          </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal para confirmar compra */}
      <Modal transparent={true} visible={confirmVisible}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>¿Finalizar compra?</Text>
          <Pressable onPress={confirmCart}>
            <Text style={styles.confirmText}>Sí</Text>
          </Pressable>
          <Pressable onPress={() => setConfirmVisible(false)}>
            <Text style={styles.cancelText}>No</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default Cart;

// Agrega los estilos adicionales para los modales
const styles = StyleSheet.create({
  // Tus estilos existentes
  container:{
    flex:1,
    position:"relative"
},
containerTotal:{
    width:"100%",
    backgroundColor:colors.accent,
    flexDirection:"row",
    padding:15,
    justifyContent:"space-around",
    alignItems:"center",
    position:"absolute",
    bottom:0,
    borderColor:colors.color1,
    borderWidth:4
},
text:{
    color:colors.lightGray,
    fontSize:16,
    fontFamily:"londrinaRegular"
},
button:{
    backgroundColor:colors.primary,
    padding:10,
    borderRadius:5,
},
buttonText:{
    color:colors.lightGray,
    fontFamily:"londrinaRegular",
    fontSize:16
},
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalText: {
    // backgroundColor: colors.lightGray,
    // padding: 20,
    // borderRadius: 10,
    // textAlign: 'center',
    backgroundColor: colors.primary,
    padding: 20,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'londrinaRegular',
    borderColor: colors.color1,
    borderWidth: 4
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    gap: 20, // Espaciado entre los botones (puedes ajustarlo según lo necesites)
  },
  confirmText: {
    paddingHorizontal:14,
    marginTop: 10,
    color: colors.primary,
    fontSize: 24,
    fontFamily: 'londrinaRegular',
    borderColor: colors.color1,
    borderRadius: 10,
    padding: 8,
    borderWidth: 4
  },
  cancelText: {
    paddingHorizontal:14,
    marginTop: 10,
    color: colors.primary,
    fontSize: 24,
    fontFamily: 'londrinaRegular',
    borderColor: colors.color1,
    borderRadius: 10,
    padding: 8,
    borderWidth: 4
  },
});




// import { StyleSheet, Text, View,FlatList, Pressable } from 'react-native'
// import cart from '../data/cart.json'
// import CardCartProduct from '../components/CardCartProduct'
// import { colors } from '../globals/colors'
// import Counter from '../components/Counter'
// import { usePostOrdersMutation } from '../services/orders'

// const Cart = () => {

//   const [triggerPost] = usePostOrdersMutation()

//   const confirmCart = () => {
//     triggerPost({id:"2",products:[{id:"2"}],total:120})
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={cart.products}
//         keyExtractor={item => item.id}
//         renderItem={({item}) => <CardCartProduct product = {item}/>}
//       />
//       <View style={styles.containerTotal}>
//         <Text style={styles.text}>Total: {cart.total}$ ARG </Text>
//         <Pressable style={styles.button} onPress={confirmCart}>
//             <Text style={styles.buttonText}>Finalizar Compra</Text>
//         </Pressable>
//       </View>
//     </View>
//   )
// }

// export default Cart

// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//         position:"relative"
//     },
//     containerTotal:{
//         width:"100%",
//         backgroundColor:colors.accent,
//         flexDirection:"row",
//         padding:15,
//         justifyContent:"space-around",
//         alignItems:"center",
//         position:"absolute",
//         bottom:0
//     },
//     text:{
//         color:colors.lightGray,
//         fontSize:16
//     },
//     button:{
//         backgroundColor:colors.primary,
//         padding:10,
//         borderRadius:5
//     },
//     buttonText:{
//         color:colors.lightGray
//     }
// })