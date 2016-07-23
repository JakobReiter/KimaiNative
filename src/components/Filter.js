/**
 * Created by jakob on 07/07/16.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    ScrollView,
    ListView,
    Text,
    StyleSheet,
} from 'react-native';

import FilterRow from './FilterRow';
import color from '../colors';

export default class Filter extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.items && nextProps.items.length > 0) {
            var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            this.state = {
                dataSource: ds.cloneWithRows(nextProps.items),
            };
        }
    }

    render() {
        if (this.props.items && this.props.items.length > 0) {
            return (
                <ScrollView style={styles.scrollView}>
                    <ListView
                        style={styles.listView}
                        dataSource={this.state.dataSource}
                        renderRow={(rowData, sectionID, rowID) => (
                            <FilterRow style={styles.filterRow} item={rowData} rowID={rowID} onRowPress={this.props.onRowClick}/>
                        )}
                    />
                </ScrollView>
            );
        } else {
            return (
                <Text>No items loaded</Text>
            )
        }
    }
}

const styles = StyleSheet.create({
    scrollView: {
        
    },
    listView: {
        backgroundColor: color.light_background,
    },
    filterRow: {

    }
});