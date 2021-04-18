import React, { useState, useMemo, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
import colors from './utils/colors';
import { scale } from './utils/scale';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCurrencies } from './actions';
import Icon from 'react-native-vector-icons/MaterialIcons';

const AddCurrency = (props) => {

    const cryptoCurrencies = useSelector(({ currencies }) => currencies);
    const selectedCurrencies = useSelector(({ selectedCurrencies }) => selectedCurrencies);
    const [selectedItems, setSelectedItems] = useState(selectedCurrencies);
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('')

    const listData = useMemo(() => {
        if (searchText === '') {
            return cryptoCurrencies
        } else {
            return cryptoCurrencies.filter(item => item.name.toUpperCase().includes(searchText.toUpperCase())
            )
        }
    }, [searchText, cryptoCurrencies])
    
    const addAction = () => {
        if (selectedItems.length > 0) {
            dispatch(setSelectedCurrencies([...selectedItems]))
            props.navigation.goBack();
        }
    }

    const onSelection = (item) => {
        const items = selectedItems;
        items.push(item)
        setSelectedItems([...items]);
    }

    const onUnSelection = (item) => {
        const items = selectedItems.filter((sitem) => sitem.id !== item.id);
        setSelectedItems([...items]);
    }

    const isItemSelected = (item) => {
        return selectedItems.find(i => i.id === item.id)
    }

    const onRowPress = (itemSelected) => {
        const isSelected = isItemSelected(itemSelected);
        isSelected ? onUnSelection(itemSelected) : onSelection(itemSelected)

    }

    const renderElement = ({ item, index }) => {
        let isSelected = isItemSelected(item);
        return (
            <RowItem
                onPress={onRowPress}
                index={index}
                item={item}
                value={item.name}
                selected={isSelected}
            />
        )
    };

    let renderSeparator = () => {
        return <View style={styles.separator} />
    };

    return (
        <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={searchText}
                    placeholder=" Search Currency"
                    onEndEditing={() => { }}
                    onChangeText={(text) => {
                        setSearchText(text)
                    }}
                />
                <FlatList
                    data={listData}
                    contentContainerStyle={styles.searchListContainer}
                    renderItem={renderElement}
                    keyExtractor={item => item.id}
                    keyboardShouldPersistTaps={'always'}
                    keyboardDismissMode={"none"}
                    ItemSeparatorComponent={renderSeparator}
                    extraData={selectedItems}
                />
            <TouchableOpacity style={styles.addButton} onPress={addAction}>
                <Text style={styles.addText}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}


function RowItem(props) {

    let renderIcon = () => {
        return (
            <Icon
                name="done"
                color={colors.activeGreen}
                size={scale(20)}
            />);
    };

    let renderText = () => {
        return <Text style={styles.placeholderText} numberOfLines={1}>{props.value}</Text>
    };
    return (
        <TouchableOpacity style={styles.row} onPress={() => {
            props?.onPress(props.item)
        }}
        >
            {renderText()}
            {props.selected && renderIcon()}
        </TouchableOpacity>
    );
}

export default AddCurrency;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    row: {
        padding: scale(10),
        marginHorizontal: scale(5),
        marginTop: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInputStyle: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    addButton: {
        marginVertical: scale(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: scale(10),
        backgroundColor: colors.brand,
        paddingVertical: scale(10),
        borderColor: colors.grey,
        borderRadius: 12
    },
    placeholderText: {
        color: colors.grey,
        fontSize: 20
    },
    addText: {
        color: colors.white,
        fontSize: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: colors.grey2,
        paddingHorizontal: scale(5)
    },
    searchListContainer: {
        marginTop: scale(5)
    },
    separator: {
        backgroundColor: colors.grey2,
        height: 1,
        marginHorizontal: scale(5),
    }
})
