/**
 * Created by jakob on 10/07/16.
 */

import React, {Component} from 'react';
import {
    TouchableHighlight,
    Text,
    StyleSheet,
    View,
} from 'react-native';

import color from '../colors';

export default class FilterRow extends Component {

    render() {
        if (this.props.item) {
            return (
                <TouchableHighlight
                    onPress={() => { this.props.onRowPress(this.props.item); }}
                    style={styles.touch}
                    activeOpacity={0.9}
                    underlayColor={color.light_highlight}
                >
                    <View style={styles.row}>
                        <Text style={styles.text}>{this.props.item.name}</Text>
                    </View>
                </TouchableHighlight>

            );
        } else
            return (
                <Text stlye={styles.text}>Error</Text>
            );
    }
}


const styles = StyleSheet.create({
    touch: {
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottomColor: color.dark_background,
        borderBottomWidth: 1,
    },
    text: {
        flex: 1,
        color: 'black',
    }
});