import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { colors } from '../globals/colors';
import { useNavigation } from '@react-navigation/native';
import images from '../../imageAssets.js';

const CardProduct = ({ product }) => {
  const { name, description, price, img, stock } = product;
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const imageSource = images[img]

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('ProductDetail', { product })}
    >
      <Image style={styles.image} source={imageSource} resizeMode="cover" />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.containerText}>
          <Text style={width > 400 ? styles.text : styles.textMin}>${price}</Text>
          <Text
            style={[width > 400 ? styles.text : styles.textMin, styles.description]}
            numberOfLines={3}
            ellipsizeMode="tail"
          >
            {description}
          </Text>
          <Text style={width > 400 ? styles.text : styles.textMin}>Stock: {stock}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    margin: 10,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: {
    minWidth: 50,
    minHeight: 50,
    maxWidth: 90,
    maxHeight: 90,
    backgroundColor: colors.color1,
  },
  infoContainer: {
    flex: 1, // Para que el texto se ajuste al espacio disponible
  },
  name: {
    color: colors.lightGray,
    fontSize: 14,
    padding: 5,
    fontFamily: 'londrinaRegular',
  },
  containerText: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap', // Permitir que el contenido se ajuste en múltiples líneas
    padding: 10,
    overflow: 'hidden',
  },
  text: {
    color: colors.lightGray,
    fontSize: 16,
    fontFamily: 'londrinaLight',
  },
  textMin: {
    color: colors.lightGray,
    fontSize: 12,
    fontFamily: 'londrinaLight',
  },
  description: {
    flex: 1, // Ocupar el espacio disponible restante
  },
});








// import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
// import React from 'react'
// import { colors } from '../globals/colors'
// import { useNavigation } from '@react-navigation/native'

// const CardProduct = ({product}) => {

//     const {name, description, price, img, stock} = product
//     const {width, height} = useWindowDimensions()
//     const navigation = useNavigation()


//     const limitText = (text, maxLength) => {
//       if (text.length <= maxLength) {
//         return text + '      ...';
//       }
//       return text.slice(0, maxLength) + '...';
//     };
  
//     // Llama a limitText para limitar el texto de la descripción antes de renderizar el componente
//     const limitedDescription = limitText(description, 70);





//   return (
//     <Pressable style={styles.container} onPress={()=> navigation.navigate("ProductDetail",{product})}>
//       <Image style={styles.image} source={{uri:img}} resizeMode='cover'/>
//       <View>
//         <Text style={styles.name}>{name}</Text>
//         <View style={styles.containerText}>
//             <Text style={width > 400 ? styles.text : styles.textMin}>${price} </Text>
//             <Text style={width > 400 ? styles.text : styles.textMin}>{limitedDescription}</Text>
//             <Text style={width > 400 ? styles.text : styles.textMin}>Stock: {stock}</Text>
//         </View>
//       </View>
//     </Pressable>
//   )
// }

// export default CardProduct

// const styles = StyleSheet.create({
//     container:{
//         backgroundColor:colors.primary,
//         margin:10,
//         borderRadius:5,
//         padding:10,
//         flexDirection:"row",
//         gap:10,
//         alignItems:"center",
//         overflow:"hidden"
//     },
//     image:{
//         minWidth:50,
//         minHeight:50,
//         maxWidth:90,
//         maxHeight:90,
//         width:"15vw",
//         height:"15vw",
//         backgroundColor:"red"
//     },
//     name:{
//         color:colors.lightGray,
//         fontSize:14,
//         padding:5,
//         fontFamily:"londrinaRegular"
//     },
//     containerText:{
//         flexDirection:"row",
//         gap:20,
//         padding:10,
//         overflow:"hidden"
//     },
//     text:{
//        color:colors.lightGray,
//        fontSize:16,
//        fontFamily:"londrinaLight",
//     },
//     textMin:{
//       color:colors.lightGray,
//       fontSize:12,
//       fontFamily:"londrinaLight",
//     }
// })