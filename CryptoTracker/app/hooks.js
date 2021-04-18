import axios from 'axios';
import { useQuery } from 'react-query';

export const useCryptoCurrencyData = () => {

    const { data: { data: { data: cryptoCurrencies = [] } = {} } = {} } = useQuery(['fetch-crpto-currency'], () =>
        axios('https://data.messari.io/api/v2/assets?with-metrics'), {
        refetchOnMount: false
    })

    // const { data: image } = useQuery(['fetch-images'], () =>
    //     axios('https://messari.io/asset-images/21c795f5-1bfd-40c3-858e-e9d7e820c6d0/32.png?v=2'), {
    //     refetchOnMount: false
    // })

    // console.log('here results: ', cryptoCurrencies)
    
    return {
        cryptoCurrencies
    }

}