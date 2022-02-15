import React, { Children } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, View, useContext } from "react-native";
import useProductList from "../hooks/useProductList";
import {ListContext} from "../context/ListContext"


const HandleListInput = () => {
  const [name, onChangeName] = React.useState('nome');
  const [supply, onChangeSupply] = React.useState('estoque')
  const [price, onChangePrice] = React.useState('preço')
 
  

  return (
    <SafeAreaView >
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
        />
        <TextInput
            style={styles.supply}
            onChangeText={onChangeSupply}
            value={supply}
        />
        <TextInput
            style={styles.price}
            onChangeText={onChangePrice}
            value={price}
        />
        <ListContext.Provider value={list} >
         
        <Button 
        color={'red'}
        title='Adicionar Produto'
        accessibilityLabel="Adicionar Produto"
        onPress={function mockSaveProduct() {
            saveProduct({
              id: Date.now(),
              name: "BTS MEMORIES",
              supply: 1,
              value: 400,
              total: "supply X value",
            });
          }} />
        </ListContext.Provider>
        
        </View>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginLeft: 10
    },
     input: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        height: 40,
        width: 70,
        borderWidth: 1,
        padding: 10,
    },
    supply: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        height: 40,
        width: 70,
        borderWidth: 1,
        padding: 10,
     },
     price: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        alignContent: 'flex-end',
        height: 40,
        width: 70,
        borderWidth: 1,
        padding: 10,
     },
     button:{
         backgroundColor: 'red'
     }

});

export default HandleListInput;