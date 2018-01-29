import React from 'react';
import PropTypes from 'prop-types';
import {Text, View} from 'react-native';

import styles from './styles';

const getTabStyle = (id, idSelected) => (
    idSelected === id ? [styles.tab, styles.selectedTab] : [styles.tab]
);

const TabNavigator = ({tabs, onChange, idSelected}) => (
    <View>
        <View style={styles.container}>
            {tabs.map(({id, label}) => (
                <Text key={id} style={getTabStyle(id, idSelected)} onPress={() => onChange(id)}>
                    {label}
                </Text>
            ))}
        </View>
        <View style={styles.tabNavigatorFooter}/>
    </View>
);

TabNavigator.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string
    })).isRequired,
    onChange: PropTypes.func.isRequired,
    idSelected: PropTypes.number.isRequired
};

export default TabNavigator;
