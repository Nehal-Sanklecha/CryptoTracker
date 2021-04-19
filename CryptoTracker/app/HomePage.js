import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import colors from './utils/colors';
import { scale } from './utils/scale';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swipeout from 'react-native-swipeout';
import { removeCurrency } from './actions';
import { useCryptoCurrencyData } from './hooks';
import ActionButton from 'react-native-action-button';


const HomePage = (props) => {
    useCryptoCurrencyData()
    const currencies = useSelector(({ selectedCurrencies }) => selectedCurrencies);
    const dispatch = useDispatch();

    const removeItem = (item) => {
        const filteredItem = currencies.filter(ritem => ritem.id !== item.id)
        dispatch(removeCurrency([...filteredItem]))
    }

    const getTrendIconAndColor = (change) => {
        return change > 0 ? { iconName: 'trending-up', iconColor: colors.activeGreen } : { iconName: 'trending-down', iconColor: colors.errorRed }
    }

    const renderRow = ({ item }) => {
        const url = 'https://messari.io/asset-images/' + item.id + '/32.png'
        const latestItem = currencies?.find(ele => ele.id === item.id)
        const price = latestItem?.price?.toFixed(2)
        let changeInPrice = latestItem?.change?.toFixed(2)
        const iconProps = getTrendIconAndColor(changeInPrice)
        const swipeoutBtns = [
            {
                text: 'Delete',
                backgroundColor: colors.errorRed,
                onPress: () => removeItem(item)
            }
        ]
        return (
            <Swipeout right={swipeoutBtns}>
                <View style={styles.row}>
                    <View style={styles.rowImageContainer}>
                        <Image
                            source={{ uri: url }}
                            style={styles.imageIcon}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.rowContent}>
                            <Text>{item.name}</Text>
                            <Text>${price}</Text>
                        </View>
                        <View style={styles.rowContent}>
                            <Text>{item.symbol}</Text>
                            <View style={styles.change}>
                                <Icon name={iconProps.iconName} size={scale(18)} color={iconProps.iconColor} />
                                <Text style={{ color: iconProps.iconColor }}> {Math.abs(changeInPrice)}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </Swipeout>
        );
    }
    return (
        <>
            {currencies?.length > 0 && <View style={styles.container}>
                <FlatList
                    data={currencies}
                    renderItem={renderRow}
                    keyExtractor={item => item.id + ''}
                />

            </View>}
            {currencies?.length < 0 && <View style={styles.textContainer}>
                <Text style={styles.placeholderText}>No Currency Added yet!</Text>
            </View>}
            <ActionButton
                buttonColor={colors.brand}
                onPress={() => { props.navigation.navigate("Add Currency") }}
            />
        </>
    )
}

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.grey2
    },
    row: {
        backgroundColor: colors.white,
        paddingHorizontal: scale(15),
        paddingVertical: scale(5),
        flexDirection: 'row',
        marginHorizontal: scale(5),
        marginTop: scale(5),
    },
    rowImageContainer: {
        backgroundColor: colors.white,
        width: 32,
        height: 32,
        borderRadius: 16,
        marginVertical: scale(10),
        marginRight: scale(20),
    },
    rowContent: {
        flexDirection: 'row',
        marginVertical: scale(5),
        justifyContent: 'space-between'
    },
    textContainer: {
        flex: 1,
        backgroundColor: colors.grey2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeholderText: {
        color: colors.grey,
        fontSize: 20
    },
    change: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imageIcon: {
        width: 32,
        height: 32,
        borderRadius: 16
    }
})