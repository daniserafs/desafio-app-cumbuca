import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import HandleSearchInput from "./src/components/HandleSearchInput";
import HandleListInput from "./src/components/HandleListInput";
import ListCard from "./src/components/ListCard";
import { ListContext as List } from "./src/context/ListContext";

export default function App() {
  return (
    <List.Provider value={[]}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.h1}>
          <Text>Lista de produtos</Text>
        </View>

        <View style={styles.searchInput}>
          <HandleSearchInput />
        </View>

        <View>
          <HandleListInput />
        </View>
        <ListCard />
      </SafeAreaView>
    </List.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  searchInput: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    marginBottom: 20,
  },

  h1: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
