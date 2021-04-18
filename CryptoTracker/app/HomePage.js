import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import colors from './utils/colors';
import { scale } from './utils/scale';
import { useDispatch, useSelector } from 'react-redux';


const HomePage = () => {
    const data = [
        {
            currency: 'Bitcoin',
            name: 'BTC',
            currentPrice: '$7,215.88',
            trend: '1.82%'
        },
        {
            currency: 'XRP',
            name: 'XRP',
            currentPrice: '$5,205.33',
            trend: '-0.66%'
        }
    ]
    const currencies = useSelector(({ selectedCurrencies }) => selectedCurrencies);

    const renderRow = ({item}) => {
        const url ='https://messari.io/asset-images/'+item.id+'/32.png'
        return (
            <View style={styles.row}>
                <View style={styles.rowImageContainer}>
                <Image
                    source={{ uri: url}}
                    style={{ width:32, height: 32, borderRadius: 16}}
                    resizeMode="contain"
             />
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.rowContent}>
                        <Text>Bitcoin</Text>
                        <Text>721588</Text>
                    </View>
                    <View style={styles.rowContent}>
                        <Text>Bitcoin</Text>
                        <Text>721588</Text>
                    </View>
                </View>
            </View>
        );
    }
if (currencies?.length > 0) {
    return (
        <View style={styles.container}>
            <FlatList
                data={currencies}
                renderItem={renderRow}
                keyExtractor={item => item.id+''}
            />
        </View>
    )
} 
return (
    <View style={styles.textContainer}>
        <Text style={styles.placeholderText}>No Currency Added yet!</Text>
    </View>
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
        width:32, 
        height: 32,
        borderRadius: 16, 
        margin: scale(10),
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
    }
})