import { FlatList, StyleSheet, Text, View } from 'react-native';
import CardOrder from '../components/CardOrder';
import { useGetOrdersQuery } from '../services/orders';

const Orders = () => {
  const { data: orders, isSuccess, isError, isLoading, error } = useGetOrdersQuery();

  if (isLoading) {
    return <Text>Cargando órdenes...</Text>;
  }

  if (isError) {
    return <Text>Error al cargar órdenes: {error.message}</Text>;
  }

  return (
    <View>
      <FlatList
        data={Object.values(orders || {})}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardOrder order={item} />}
      />
    </View>
  );
};

export default Orders;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 10,
//   },
// });






// import { FlatList, StyleSheet, Text, View } from 'react-native'
// import orders from '../data/orders.json'
// import CardOrder from '../components/CardOrder'
// import { useGetOrdersQuery } from '../services/orders'


// const Orders = () => {

//   const {data,isSuccess,isError,error,isLoading} = useGetOrdersQuery()

//   return (
//     <View>
//       <FlatList
//         data={orders}
//         keyExtractor={item => item.id}
//         renderItem={({item})=> <CardOrder order={item}/>}
//       />
//     </View>
//   )
// }

// export default Orders

// const styles = StyleSheet.create({})