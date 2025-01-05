import { Pressable, StyleSheet, Text, View } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../globals/colors';

const CardCartProduct = ({product, onRemove}) => {
    const {title, description, price, quantity} = product


    return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={styles.containerText}>
              <Text style={styles.text}>Precio unitario: {price}$ ARG</Text>
              <Text style={styles.text}>Cantidad: {quantity}</Text>
              <Text style={styles.text}>Subtotal: {price * quantity}$ ARG</Text>
            </View>
          </View>
          <Pressable onPress={onRemove}>
            <Entypo name="trash" size={30} color={colors.lightGray} />
          </Pressable>
        </View>
      );
//   return (
//     <View style={styles.container}>
//       <View style={styles.content}>
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.description}>{description}</Text>
//         <View style={styles.containerText}>
//             <Text style={styles.text}>Precio: {price}$  ARG</Text>
//             <Text style={styles.text}>Cantidad: 1</Text>
//         </View>
//       </View>
//       <Entypo name="trash" size={30} color={colors.lightGray} />
//     </View>
//   )
}

export default CardCartProduct

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        margin:10,
        borderRadius:5,
        padding:15,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    content:{
        width:"80%",
        gap:15
    },
    containerText:{
        flexDirection:"row",
        gap:20

    },
    title:{
        fontSize:20,
        color:colors.lightGray
    },
    description:{
        color:colors.lightGray
    },
    text:{
        color:colors.lightGray,
        fontSize:16
    }
})