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
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
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
