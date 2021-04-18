import axios from 'axios';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { addCurrencies } from './actions';

export const useCryptoCurrencyData = () => {
    const dispatch = useDispatch();

    const { data: { data: { data: cryptoCurrencies = [] } = {} } = {}, isLoading } = useQuery(['fetch-crpto-currency'], () =>
        axios('https://data.messari.io/api/v2/assets?fields=id,name,slug,symbol,metrics/market_data'), {
        refetchOnMount: false,
        refetchInterval: 60000
    });

    if (cryptoCurrencies.length > 0) {
        const list = cryptoCurrencies.map(item => {
            return {
                id: item.id,
                name: item.name,
                price: item.metrics.market_data.price_usd,
                change: item.metrics.market_data.percent_change_usd_last_24_hours,
                symbol: item.symbol
            }
        })
        dispatch(addCurrencies(list))
    }
    return {
        cryptoCurrencies,
        isLoading
    }

}