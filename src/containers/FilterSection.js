/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
} from 'react-native';

import * as filterActions from '../actions/filterActions';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Accordion from '../components/FilterAccordion';

import color from '../colors';
import Filter from '../components/Filter';

const SECTIONS = [
    {
        title: 'Projects',
        content: 'projects'
    },
    {
        title: 'Tasks',
        content: 'tasks'
    },
    {
        title: 'Recently Used',
        content: 'recent',
    }
];

class FilterSection extends Component {

    _updateFilters() {
        if(this.props.state.settings && !(this.props.state.filters.projects || this.props.state.filters.tasks)) {
            const { state, actions } = this.props;
            actions.loadProjects(state.settings);
            actions.loadTasks(state.settings);
        }
    }

    _renderHeader(section, index, isActive) {
        return (
            <View style={styles.accordionHeader}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    }

    _renderContent(section, index, isActive) {

        const {state, actions} = this.props;
        switch (section.content) {
            case 'projects':
                return (
                    <Filter style={styles.filterElement} items={state.filters.projects} onRowClick={actions.selectProject}/>
                );

            case 'tasks':
                return (
                    <Filter style={styles.filterElement} items={state.filters.tasks} onRowClick={actions.selectTask}/>
                );

            case 'recent':
                return (
                    <Filter style={styles.filterElement} items={state.filters.recent} onRowClick={actions.selectRecent}/>
                );
        }
        return (<Text>Error</Text>);
    }

    render() {
        const {state, actions} = this.props;
        return (
            <View style={styles.filters}>
                <Accordion
                    sections={SECTIONS}
                    //initiallyActiveSection={2}
                    renderHeader={this._renderHeader.bind(this)}
                    renderContent={this._renderContent.bind(this)}
                    style={styles.accordion}
                    onChange={this._updateFilters.call(this)}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.dark_background,
    },
    filters: {
        flex: 5,
    },
    accordion : {
        height: 370,
    },
    accordionHeader: {
        flex: 1,
        backgroundColor: color.darker_background,
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: 'black',
    },
    headerText: {
        color: color.light_background,
        fontSize: 18,
        padding: 10,
    },
});

export default connect(
    state => ({state}),
    (dispatch) => ({
        actions: bindActionCreators({...filterActions}, dispatch)
    })
)(FilterSection);
