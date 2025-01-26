import { StyleSheet, Text, View,FlatList, Pressable, ActivityIndicator, Modal } from 'react-native'
import CardCartProduct from '../components/CardCartProduct'
import { colors } from '../globals/colors'
import { usePostOrdersMutation } from '../services/orders'
import { useSelector } from 'react-redux'
import { useGetCartQuery, useDeleteCartMutation, useDeleteCartProductMutation } from '../services/cart'
import { useEffect, useState } from 'react'
import EmptyListComponent from '../components/EmptyListComponent'
import { useNavigation } from '@react-navigation/native'

const Cart = () => {
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [triggerPost] = usePostOrdersMutation()
  const [triggerDeleteCart] = useDeleteCartMutation()
  const [triggerDeleteItemCart] = useDeleteCartProductMutation()
  const localId = useSelector(state => state.user.localId)
  const {data:cart,isLoading} = useGetCartQuery({localId})
  const [total,setTotal] = useState(0)

  useEffect(()=>{
    if(cart){
      setTotal(cart.reduce((acc,item) => acc + item.price * item.quantity ,0 ))
    }
  },[cart])



  const confirmCart = () => {
    setConfirmVisible(false);
    const createdAt = new Date().toLocaleString()
    const order = {
      products:cart,
      createdAt,
      total
    }
    triggerPost({order,localId})
    triggerDeleteCart({localId})
    navigation.navigate("OrdersStack")
  }

  const handleRemoveProduct = (productId) => {
      triggerDeleteItemCart({localId,productId})
      setModalVisible(false);
    };


  if(isLoading) return <ActivityIndicator size="large" color={colors.primary} style={styles.spinner} />
  if(!cart) return <EmptyListComponent message="No hay productos en el carrito"/>
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
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
        <Text style={styles.text}>Total: ${total} </Text>
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
}

export default Cart

const styles = StyleSheet.create({
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
    gap: 20,
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
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});