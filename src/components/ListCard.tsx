import {
  FlatList,
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  Button, 
} from "react-native";


const ListCard = () => {
  const { productList, saveProduct } = useProductList();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.item}
        data={productList}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "white" }}>
            <Text> {item.name}</Text>
            <Text>
              {item.supply}
              <Button title="+" onPress={() => alert("button pressed")} />
              <Button title="-" onPress={() => alert("button pressed")} />
            </Text>

            <Text>{item.value}</Text>
            <Text>{item.total}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        horizontal={true}
      />

      <Button
        title="Excluir Produto"
        onPress={function mockSaveProduct() {
          saveProduct({
            id: Date.now().toString(),
            name: "BTS MEMORIES",
            supply: 1,
            value: 400,
            total: "supply X value",
          });
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  item: {
    flexDirection: "column",
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListCard;
