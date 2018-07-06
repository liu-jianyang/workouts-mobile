import * as React from 'react';
import {
    TouchableHighlight,
    TouchableNativeFeedback,
    Platform,
    View,
} from 'react-native';
import styles from './styles';

export default class Touchable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            children,
            onPress,
        } = this.props;

        const wrappedChildren = (
            <View>
                {children}
            </View>
        )
        if (Platform.OS === 'ios') {
            return (
                <TouchableHighlight onPress={onPress}>
                    {wrappedChildren}
                </TouchableHighlight>
            )
        } else {
            return (
                <TouchableNativeFeedback onPress={onPress}>
                    {wrappedChildren}
                </TouchableNativeFeedback>
            )
        }
    }
}