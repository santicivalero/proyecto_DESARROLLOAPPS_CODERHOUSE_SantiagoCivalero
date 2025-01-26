import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, FlatList, Pressable } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '../globals/colors';

const CardOrder = ({ order }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const date = new Date(order.date).toLocaleString();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{order.createdAt}</Text>
        <Text style={styles.text}>Total: ${order.total}</Text>
      </View>
      <AntDesign
        name="search1"
        size={30}
        color={colors.lightGray}
        onPress={() => setModalVisible(true)}
      />

      {/* Modal para mostrar los productos */}
      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Productos de la orden</Text>
            <FlatList
              data={order.products}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.productItem}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productQuantity}>Cantidad: {item.quantity}</Text>
                  <Text style={styles.productPrice}>${item.price}</Text>
                </View>
              )}
            />
            <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.accent,
    margin: 10,
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
  },
  content: {
    gap: 10,
  },
  text: {
    color: colors.lightGray,
    fontSize: 16,
    fontFamily: 'londrinaLight',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: colors.accent,
    padding: 20,
    borderRadius: 10,
    width: '90%',
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'londrinaRegular',
    marginBottom: 15,
    textAlign: 'center',
    color: colors.lightGray,
  },
  productItem: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  productName: {
    color: colors.lightGray,
    fontSize: 16,
    fontFamily: 'londrinaLight',
  },
  productQuantity: {
    color: colors.lightGray,
    fontSize: 14,
    fontFamily: 'londrinaRegular',
  },
  productPrice: {
    color: colors.lightGray,
    fontSize: 14,
    fontFamily: 'londrinaRegular',
  },
  closeButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: colors.lightGray,
    fontFamily: 'londrinaBold',
    fontSize: 16,
    fontFamily: 'londrinaRegular',
  },
});








// import { StyleSheet, Text, View } from 'react-native'
// import AntDesign from '@expo/vector-icons/AntDesign';
// import { colors } from '../globals/colors';

// const CardOrder = ({order}) => {

//     const date = new Date(order.date).toLocaleString()

//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         <Text style={styles.text}>{date}</Text>
//         <Text style={styles.text}>Total: ${order.total}</Text>
//       </View>
//       <AntDesign name="search1" size={30} color={colors.lightGray} />
//     </View>
//   )
// }

// export default CardOrder

// const styles = StyleSheet.create({
//     container:{
//         flexDirection:"row",
//         backgroundColor:colors.accent,
//         margin:10,
//         padding:20,
//         justifyContent:"space-between",
//         alignItems:"center",
//         borderRadius:5
//     },
//     content:{
//         gap:10
//     },
//     text:{
//         color:colors.lightGray,
//         fontSize:16,
//         fontFamily:"londrinaLight"
//     }
// })