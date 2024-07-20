import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { secondNav } from '../../../data';

const ButtonList = () => {
    // State to keep track of the active button
    const [activeId, setActiveId] = useState(null);

    // Function to handle button press
    const handlePress = (id) => {
        setActiveId(id);
    };

    return (
        <View style={styles.container}>
            {secondNav.map((item) => (
                <TouchableOpacity
                    key={item.id}
                    style={[
                        styles.button,
                        {
                            backgroundColor: item.id === activeId ? '#CCEBFF' : '#00A6FB', // Lighter color for active button
                        },
                    ]}
                    onPress={() => handlePress(item.id)}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            { color: item.id === activeId ? '#00A6FB' : '#fff' }, // Darker color for active button text
                        ]}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
    },
    button: {
        width: 110, 
        height: 44, 
        borderRadius: 25,
        borderWidth: 2,
        borderColor: '#00A6FB', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginHorizontal: 5, 
    },
    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        padding: 4,

    },
});

export default ButtonList;
