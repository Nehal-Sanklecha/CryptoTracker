import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SearchableDropdown from 'react-native-searchable-dropdown';
import { useCryptoCurrencyData } from './hooks';
import colors from './utils/colors';
import { scale } from './utils/scale';
import { useDispatch, useSelector } from 'react-redux';
import {setSelectedCurrencies} from './actions';

const AddCurrency = (props) => {

    const { cryptoCurrencies } = useCryptoCurrencyData()
    const [selectedItems, setSelectedItems] = useState([]);
    const currencies = useSelector(({ selectedCurrencies }) => selectedCurrencies);
    const dispatch = useDispatch();
    
    const addAction = () => {
        dispatch(setSelectedCurrencies([...currencies, ...selectedItems]))
        props.navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <SearchableDropdown
                multi={true}
                selectedItems={selectedItems}
                onItemSelect={(item) => {
                    const items = selectedItems;
                    items.push(item)
                    setSelectedItems(items);
                }}
                containerStyle={{ padding: 5, flex:1, }}
                onRemoveItem={(item, index) => {
                    const items = selectedItems.filter((sitem) => sitem.id !== item.id);
                    setSelectedItems(items);
                }}
                itemStyle={styles.row}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 200 }}
                items={cryptoCurrencies}
                defaultIndex={-1}
                chip={true}
                resetValue={false}
                textInputProps={
                    {
                        placeholder: "Search currency",
                        underlineColorAndroid: "transparent",
                        style: styles.textInputStyle,
                    }
                }
                listProps={
                    {
                        nestedScrollEnabled: true,
                    }
                }
            />
            <TouchableOpacity style={styles.addButton} onPress={addAction}>
                <Text style={styles.placeholderText}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddCurrency;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    row: {
        padding: 10,
        marginTop: 2,
        backgroundColor: colors.grey2,
        borderColor: colors.grey2,
        borderWidth: 1,
        borderRadius: 5,
    },
    textInputStyle: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    addButton: {
        marginVertical: scale(15),
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: scale(10),
        backgroundColor: colors.grey2,
        paddingVertical: scale(15),
        borderColor: colors.grey,
        borderRadius: 12
    },
    placeholderText: {
        color: colors.grey,
        fontSize: 20
    }
})
