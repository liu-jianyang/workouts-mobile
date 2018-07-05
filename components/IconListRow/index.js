import * as React from 'react';
import {
    View,
    Image,
} from 'react-native';
import Touchable from '$components/Touchable';
import styles from './styles';

export default class IconListRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            uri,
            children,
            onPress,
        } = this.props;
        if (onPress) {
            return (
                <Touchable style={styles.container}>
                    <Image
                        style={styles.icon}
                        source={ uri } />
                    {children}
                </Touchable>
            );
        }
        return (
            <View style={styles.container}>
                <Image
                    style={styles.icon}
                    source={ uri } />
                {children}
            </View>
        );
    }
}