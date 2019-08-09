import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  StatusBar,
  ActivityIndicator
} from 'react-native';
import { DrinkBox } from '../../components/DrinkBox/DrinkBox'

const propTypes = {}

export default function Home (props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#6a51ae"
      />
      <SafeAreaView>
      {
        props.cocktailsPending ? <ActivityIndicator size="large" color="white" /> : <FlatList
          data={props.cocktailsData}
          renderItem={({item}) => <DrinkBox strDrink={item.strDrink} strDrinkThumb={item.strDrinkThumb} idDrink={item.idDrink}/>}
        />
      }
      </SafeAreaView>
    </View>
  )
}

Home.navigationOptions = {
  title: 'Random Drinks',
  headerTintColor: '#000',
  headerTitleStyle :{ flex: 1, textAlign: 'center',alignSelf:'center'},
  headerStyle: { backgroundColor: '#6a51ae' }
}

Home.propTypes = propTypes

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#6a51ae'
  }
});
