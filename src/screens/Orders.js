import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import CardOrder from '../components/CardOrder';
import { useGetOrdersUserQuery } from '../services/orders';
import EmptyListComponent from '../components/EmptyListComponent';
import { colors } from '../globals/colors';
import { useSelector } from 'react-redux'

const Orders = () => {
  const localId = useSelector(state => state.user.localId)
  const { data: orders, isLoading } = useGetOrdersUserQuery({localId});

  if(isLoading) return <ActivityIndicator size="large" color={colors.primary} style={styles.spinner} />
  if(!orders) return <EmptyListComponent message="No hay órdenes"/>

  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CardOrder order={item} />}
      />
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});