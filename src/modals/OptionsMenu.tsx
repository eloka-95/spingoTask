// src/components/OptionsMenu.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Option {
    label: string;
    icon: string;
    onPress: () => void;
}

interface OptionsMenuProps {
    isVisible: boolean;
    onClose: () => void;
    options: Option[];
}

const OptionsMenu: React.FC<OptionsMenuProps> = ({ isVisible, onClose, options }) => {
    return (
        <Modal isVisible={isVisible} onBackdropPress={onClose}>
            <View style={styles.modalContent}>
                {options.map((option, index) => (
                    <TouchableOpacity key={index} onPress={option.onPress} style={styles.option}>
                        <Icon name={option.icon} size={24} style={styles.icon} />
                        <Text style={styles.optionText}>{option.label}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    icon: {
        marginRight: 10,
    },
    optionText: {
        fontSize: 16,
    },
});

export default OptionsMenu;
