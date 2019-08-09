import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export const RefreshButton = ({
    getCocktails
  }) => (
    <TouchableOpacity onPress={getCocktails} style={{ width: 70, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', borderRadius: 15 }}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Refresh</Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});