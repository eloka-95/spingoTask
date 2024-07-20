import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, SectionList, TouchableOpacity, Modal } from 'react-native';
import { HomeData } from '../../../data'; // Import your formatted data
import menuOptions from '../../../modals/menuOptions';

const HomeSectionList = () => {
    const [isMenuVisible, setMenuVisible] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<any>(null);

    // Food list Item toggle menu
    const handleMenuToggle = (item: any) => {
        setSelectedItem(item);
        setMenuVisible(!isMenuVisible);
    };

    // Render function for each item in the SectionList
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
                <View style={styles.rowContainer}>
                    <Image source={item.icon} style={styles.itemIcon} />
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDetailsText}>{item.details}</Text>
                    <TouchableOpacity onPress={() => handleMenuToggle(item)}>
                        <Image source={item.dotsIcon}  />
                    </TouchableOpacity>
                </View>
                <Text style={styles.itemPrice}><Text>per price </Text>{item.price}</Text>
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
        <>
            <SectionList
                sections={HomeData || []} // Default to empty array if HomeData is undefined
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                contentContainerStyle={styles.container}
            />
            <Modal
                transparent={true}
                visible={isMenuVisible}
                onRequestClose={() => setMenuVisible(false)}
            >
                <TouchableOpacity style={styles.modalBackground} onPress={() => setMenuVisible(false)}>
                    <TouchableOpacity style={styles.menu} activeOpacity={1}>
                        {menuOptions(setMenuVisible).map((option, index) => (
                            <TouchableOpacity key={index} style={styles.menuItem} onPress={option.onPress}>
                                <Text style={styles.menuItemText}>{option.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </TouchableOpacity>
                </TouchableOpacity>
            </Modal>
        </>
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
        justifyContent: 'space-around',
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
        marginTop: 20,
    },
    itemIcon: {
        width: 20,
        height: 20,
    },
    dotsIcon: {
        width: 20,
        height: 20,
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    menu: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        alignItems: 'flex-start',
        left:35,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    menuItemText: {
        marginLeft: 16,
        fontSize: 16,
    },
});

export default HomeSectionList;
