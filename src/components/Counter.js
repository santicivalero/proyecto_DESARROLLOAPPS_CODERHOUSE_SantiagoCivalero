import { useState, useEffect } from 'react';
import { StyleSheet, View, Pressable, Text, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counterSlice';
import { colors } from '../globals/colors';

const Counter = ({ quantity, onQuantityChange, maxStock }) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const [input, setInput] = useState(0);

  useEffect(() => {
    setInput(quantity);
  }, [quantity]);

  const handleIncrement = () => {
    if (counter < maxStock) {
      dispatch(increment());
      onQuantityChange(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter > 0) {
      dispatch(decrement());
      onQuantityChange(counter - 1);
    }
  };

  const handleInputChange = (value) => {
    const quantity = parseInt(value, 10) || 0;

    if (quantity > maxStock) quantity = maxStock;
    if (quantity < 0) quantity = 0;

    setInput(quantity);
    dispatch(incrementByAmount(quantity - counter));
    onQuantityChange(quantity);
  };

  return (
    <View style={styles.container}>
      {/* Contenedor de botones y contador */}
      <View style={styles.row}>
        <Pressable style={styles.button} onPress={handleDecrement}>
          <Text style={styles.textButton}>-</Text>
        </Pressable>
        <Text style={styles.counter}>{counter}</Text>
        <Pressable style={styles.button} onPress={handleIncrement}>
          <Text style={styles.textButton}>+</Text>
        </Pressable>
      </View>

      {/* Input debajo del contador */}
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={String(input)}
        onChangeText={handleInputChange}
      />
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centra todo horizontalmente
    justifyContent: "center",
    // padding: 20,
  },
  row: {
    flexDirection: "row", // Coloca los botones y el contador en línea
    alignItems: "center",
    marginBottom: 10, // Espacio entre el row y el input
  },
  counter: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  input: {
    width: 50,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 5,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    fontSize: 24,
    color: colors.lightGray,
  },
});
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     <View style={styles.container}>
//       <Pressable style={styles.button} onPress={handleDecrement}>
//         <Text style={styles.textButton}>-</Text>
//       </Pressable>
//       <Text style={styles.counter}>{counter}</Text>
//       <Pressable style={styles.button} onPress={handleIncrement}>
//         <Text style={styles.textButton}>+</Text>
//       </Pressable>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         value={String(input)}
//         onChangeText={handleInputChange}
//       />
//     </View>
//   );
// };

// export default Counter;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 10,
//     justifyContent: 'center',
    
//   },
//   counter: {
//     fontSize: 20,
//     marginHorizontal: 10,
//   },
//   input: {
//     width: 50,
//     textAlign: 'center',
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 5,
//   },
//   button: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: colors.primary,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   textButton: {
//     fontSize: 24,
//     color: colors.lightGray,
//   },
// });











// import { StyleSheet, Text, View,Button,TextInput } from 'react-native'
// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment,incrementByAmount } from '../features/counterSlice'

// const Counter = () => {

//     const [input,setInput] = useState(0)
//     const counter = useSelector(state => state.counter.value)
//     const dispach = useDispatch()


//   return (
//     <View>
//       <Button title='-' onPress={()=>dispach(decrement())}/>
//       <Text>{counter}</Text>
//       <Button title='+' onPress={()=>dispach(increment())}/>
//       <TextInput value={input} onChangeText={(t)=> setInput(parseInt(t))}/>
//        <Button title='cambiar' onPress={()=>dispach(incrementByAmount(input))}/>
      
//     </View>
//   )
// }

// export default Counter

// const styles = StyleSheet.create({})