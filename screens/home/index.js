import React from 'react';
import {
  FlatList,
  View,
} from 'react-native';
import IconListRow from '$components/IconListRow';
import StyledText from '$components/StyledText';
import styles from './styles';

export default class HomeScreen extends React.Component {

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

  _renderItem = ({item}) => (
    <IconListRow
      id={item.id}
      onPress={this._onPressItem}>
      <View style={styles.itemContainer}>
        <StyledText style={styles.mainText}>MainText</StyledText>
        <StyledText style={styles.subText}>SubText</StyledText>
      </View>
    </IconListRow>
  );

  _renderHeader = () => (

  )

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
