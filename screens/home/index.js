import React from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import IconListRow from '$components/IconListRow';
import Touchable from '$components/Touchable';
import StyledText from '$components/StyledText';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id)); // toggle
      return {selected};
    });
  };

  _onPressHeader = () => {
    console.log('press header: ');
  }

  _renderItem = ({item}) => (
    <IconListRow
      id={item.id}
      onPress={this._onPressItem}>
      <View style={styles.itemContainer}>
        <StyledText style={styles.mainText}>{item.mainText}</StyledText>
        <StyledText style={styles.subText}>{item.subText}</StyledText>
      </View>
    </IconListRow>
  );

  _renderHeader = () => (
    <Touchable onPress={this._onPressHeader}>
      <View style={styles.headerContainer}>
        <StyledText style={styles.mainText}>Create Workout</StyledText>
      </View>
    </Touchable>
  );

  render() {
    return (
      <FlatList
        style={styles.container}
        data={this.props.data}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
        ListHeaderComponent={this._renderHeader}
      />
    );
  }
}
