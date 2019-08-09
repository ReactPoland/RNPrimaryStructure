import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import i18next from '../../translation';

import api from '../../network/api';

const propTypes = {}

export default function Home (props) {
  console.log(props.cocktailsData)
  return (
    <View style={styles.container}>
      <SafeAreaView>
      {
        <FlatList
          data={props.cocktailsData}
          renderItem={({item}) => {
            console.log('item ', item)
            return <Text style={{ color: 'black' }}>{item.strDrink}</Text>}}
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
}

Home.propTypes = propTypes

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    marginLeft: 24,
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    marginHorizontal: 24,
    backgroundColor: Colors.light,
    height: 1,
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  },
});
