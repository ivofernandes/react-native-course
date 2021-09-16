import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from './Themed';

const Header = props => {
  console.log('using the header');
  
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: '#f7287b',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    color: 'black',
  }
});

export default Header;