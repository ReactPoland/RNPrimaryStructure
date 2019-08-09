import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
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

export default class Home extends Component {
  static navigationOptions = {
    title: ' '
  };

  state = {
    restoreView: false
  };

  render() {
    return (
      <View style={styles.container}>
        <DefaultView
          {...this.props}
          goToScene={() => this.props.navigation.navigate('Tests')}
        />
      </View>
    )
  }
}

const DefaultView = ({
  getCocktails,
  cocktailsData,
  cocktailsPending,
  cocktailsError,
}) => (
  <Fragment>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <ScrollView
        accessible
        accessibilityLabel={'scrollView'}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Header />
        <View style={styles.engine}>
          {global.HermesInternal == null ? null : (
            <Text style={styles.footer}>Engine: Hermes</Text>
          )}
          <Text style={styles.footer}>
            Translation test: {i18next.t('key')}
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle} onPress={getCocktails}>
              COCKTAILS
            </Text>
            {cocktailsPending && (
              <Text style={styles.sectionDescription}>
                COCKTAILS PENDING...
              </Text>
            )}
            {cocktailsError && (
              <Text style={styles.sectionDescription}>
                Error: {cocktailsError}
              </Text>
            )}
            {cocktailsData && (
              <Text style={styles.sectionDescription}>
                COCKTAILS DATA:
                {cocktailsData.map(data => '\n' + JSON.stringify(data))}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  </Fragment>
)

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
