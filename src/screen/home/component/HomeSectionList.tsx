import React from 'react';
import { View, Text, Image, StyleSheet, SectionList, TouchableOpacity } from 'react-native';
import { HomeData } from '../../../data'; // Import your formatted data

const HomeSectionList = () => {
    // Render function for each item in the SectionList
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <View style={styles.rowContainer}>
                    <Image source={item.icon} style={styles.itemIcon} />
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDetailsText}>{item.details}</Text>
                    <Image source={item.dotsIcon} style={styles.dotsIcon} />
                </View>
                <Text style={styles.itemPrice}><Text>per price </Text>
                   {item.price}</Text>
            </View>
        </TouchableOpacity>
    );

    // Render function for each section header
    const renderSectionHeader = ({ section }) => (
        <View style={styles.headerContainer}>
            {/* <Text style={styles.headerText}>{section.title}</Text> */}
        </View>
    );

    return (
        <SectionList
            sections={HomeData || []} // Default to empty array if HomeData is undefined
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 10,
    },
    headerContainer: {
        backgroundColor: '#f4f4f4',
        padding: 10,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
    },
    itemImage: {
        width: 80,
        height: 80,
        marginRight: 10,
    },
    itemDetails: {
        flex: 1,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemDetailsText: {
        fontSize: 14,
        color: '#666',
    },
    itemPrice: {
        fontSize: 14,
        color: '#3a3b3c',
        fontWeight: 'bold',
        marginTop:20,
    },
    itemIcon: {
        width: 20,
        height: 20,
    },
});

export default HomeSectionList;
