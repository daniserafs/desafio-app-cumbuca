import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const HandleSearchInput = () => {
  const [text, onChangeText] = React.useState("pesquisar");

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignContent: 'flex-end',
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
  },
});

export default HandleSearchInput;