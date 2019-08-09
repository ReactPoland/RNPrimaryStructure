import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

export const DrinkBox = ({
    strDrink,
    strDrinkThumb,
    idDrink
  }) => (
    <View key={idDrink} style={{ backgroundColor: 'white', borderRadius: 15, margin: 5, marginHorizontal: 25, padding: 20, flexDirection: 'row', alignItems: 'center' }}>
        <Image
          style={{width: 75, height: 75, borderRadius: 50 }}
          source={{uri: strDrinkThumb}}
        />
      <Text style={{ flex: 1, marginLeft: 20, fontSize: 15, fontWeight: 'bold' }}>{strDrink}</Text>
    </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});