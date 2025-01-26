import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from '../globals/colors';
import images from '../../imageAssets.js';

const CardCartProduct = ({ product, onRemove }) => {
  const { name, description, price, quantity, img } = product;

  const imageSource = images[img];

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={imageSource} resizeMode="cover" />
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
          <Pressable onPress={onRemove}>
            <Entypo name="trash" size={30} color={colors.lightGray} />
          </Pressable>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Precio unitario: ${price}</Text>
          <Text style={styles.text}>Cantidad: {quantity}</Text>
          <Text style={styles.text}>Subtotal: ${price * quantity}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardCartProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    margin: 10,
    borderRadius: 5,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  content: {
    flex: 1,
    marginLeft: 10,
    gap: 10,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    gap: 5,
  },
  title: {
    fontSize: 20,
    color: colors.lightGray,
    fontFamily: 'londrinaRegular',
  },
  description: {
    color: colors.lightGray,
    fontFamily: 'londrinaLight',
    flex: 1,
    marginRight: 10,
  },
  text: {
    color: colors.lightGray,
    fontSize: 16,
    fontFamily: 'londrinaLight',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: colors.color1,
  },
});