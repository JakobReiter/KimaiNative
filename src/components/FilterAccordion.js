import React, {
    Component,
    PropTypes,
} from 'react';

import {
    View,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

import Collapsible from 'react-native-collapsible/Collapsible';

const COLLAPSIBLE_PROPS = Object.keys(Collapsible.propTypes);
const VIEW_PROPS = Object.keys(View.propTypes);

class Accordion extends Component {
    static propTypes = {
        sections: PropTypes.array.isRequired,
        renderHeader: PropTypes.func.isRequired,
        renderContent: PropTypes.func.isRequired,
        onChange: PropTypes.func,
        align: PropTypes.oneOf(['top', 'center', 'bottom']),
        duration: PropTypes.number,
        easing: PropTypes.string,
        initiallyActiveSection: PropTypes.number,
        activeSection: PropTypes.oneOfType([
            PropTypes.bool, // if false, closes all sections
            PropTypes.number, // sets index of section to open
        ]),
        underlayColor: PropTypes.string,
    };

    static defaultProps = {
        underlayColor: 'black',
    };

    constructor(props) {
        super(props);

        // if activeSection not specified, default to initiallyActiveSection
        this.state = {
            activeSection: props.activeSection !== undefined ? props.activeSection : props.initiallyActiveSection,
        };
    }

    _toggleSection(section) {
        const activeSection = this.state.activeSection === section ? false : section;

        if (this.props.activeSection === undefined) {
            this.setState({ activeSection });
        }
        if (this.props.onChange) {
            this.props.onChange(activeSection);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.activeSection !== undefined) {
            this.setState({
                activeSection: nextProps.activeSection,
            });
        }
    }

    render() {
        let viewProps = {};
        let collapsibleProps = {};
        Object.keys(this.props).forEach((key) => {
            if (COLLAPSIBLE_PROPS.indexOf(key) !== -1) {
                collapsibleProps[key] = this.props[key];
            } else if (VIEW_PROPS.indexOf(key) !== -1) {
                viewProps[key] = this.props[key];
            }
        });

        return (
            <View {...viewProps} style={styles.container}>
                {this.props.sections.map((section, key) => (
                    <View key={key} style={styles.container}>
                        <TouchableHighlight onPress={() => this._toggleSection(key)} underlayColor={this.props.underlayColor}>
                            {this.props.renderHeader(section, key, this.state.activeSection === key)}
                        </TouchableHighlight>
                        <Collapsible collapsed={this.state.activeSection !== key} {...collapsibleProps}>
                            {this.props.renderContent(section, key, this.state.activeSection === key)}
                        </Collapsible>
                    </View>
                ))}
            </View>
        );
    }
}

module.exports = Accordion;

const styles = StyleSheet.create({
});
