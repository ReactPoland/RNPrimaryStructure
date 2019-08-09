import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const DefaultView = ({
    strDrink,
    strDrinkThumb,
    idDrink
  }) => (
    <View key={idDrink} style={{ borderWidth: 1, borderColor: 'black', borderRadius: 2 }}>
      <View>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: strDrinkThumb}}
        />
      </View>
      <Text>{strDrink}</Text>
    </View>
)

Home.propTypes = propTypes

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});