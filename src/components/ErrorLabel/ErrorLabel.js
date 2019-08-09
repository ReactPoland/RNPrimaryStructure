import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { RefreshButton } from '../RefreshButton/RefreshButton'
const { width } = Dimensions.get('window');

export const ErrorLabel = ({
    getCocktails,
    error
  }) => {
    return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'red', width }}>
      <View style={{ flex: 3 }}>
        <RefreshButton getCocktails={getCocktails} />
      </View>
      <Text style={{ flex: 3, fontSize: 15, textAlign: 'center' }}>error</Text>
      <View style={{ flex: 3 }}/>
    </View>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});