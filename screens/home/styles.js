import * as React from 'react';
import {
  StyleSheet,
  Platform,
} from 'react-native';
import Colors from '$constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  mainText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 10,
  },
});
