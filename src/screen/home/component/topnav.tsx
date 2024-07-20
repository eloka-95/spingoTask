import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { topNav } from '../../../data';

export default function Topnav() {
    // Render function for each item in the FlatList
    const renderItem = ({ item }) => (
        <View style={styles.navItem}>
            <Text style={styles.navText}>{item.name}</Text>
        </View>
    );

    return (
        <FlatList
            data={topNav}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    navItem: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginRight: 10, // Space between items
    },
    navText: {
        fontSize: 16,
    },
});
