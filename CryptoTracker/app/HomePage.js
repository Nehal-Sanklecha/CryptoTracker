import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import colors from './utils/colors';
import { scale } from './utils/scale';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import {useQuery} from 'react-query';

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
    const { isLoading, error, data: {data: {data:responseData = []} = {}} = {} } = useQuery('fetch-data', () =>
        axios('https://data.messari.io/api/v2/assets?with-metrics'))

    useEffect(() => {
        if(responseData.length > 0){
            console.log('here data', responseData);
        }
    }, [responseData])

    const renderRow = () => {
        return (
            <View style={styles.row}>
                <View style={styles.rowImageContainer}>
                    <Icon name="add" size={scale(22)} color={colors.grey} />
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

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderRow}
                keyExtractor={item => item.currency}
            />
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
        marginTop: scale(5) 
    },
    rowImageContainer: { 
        backgroundColor: colors.grey2, 
        borderRadius: scale(22), 
        marginHorizontal: scale(10) 
    },
    rowContent: { 
        flexDirection: 'row', 
        marginVertical: scale(5), 
        justifyContent: 'space-between' 
    }
})