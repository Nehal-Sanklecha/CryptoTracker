import axios from 'axios';
import { useQuery } from 'react-query';

export const useCryptoCurrencyData = () => {

    const {data: {data: {data:cryptoCurrencies = []} = {}} = {}, isLoading}= useQuery(['fetch-crpto-currency'], () =>
        axios('https://data.messari.io/api/v2/assets?fields=id,slug,symbol,metrics/market_data'), {
        refetchOnMount: false,
        refetchInterval: 60000
    })
    return {
        cryptoCurrencies,
        isLoading
    }

}