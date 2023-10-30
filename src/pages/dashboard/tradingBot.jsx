import { CircularProgress, VStack } from '@chakra-ui/react'
import TradingbotCard from '../../components/botTrading/tradingbotCard'
import { useEffect, useState } from 'react';
import { selectToken } from '../../redux/userSlice';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function TradingBot() {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
    const token = useSelector(selectToken);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${VITE_BASE_URL}/performance`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })
                setData(response.data.data.performance);
                // console.log(response.data.data.performance.profit_line);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
                console.log(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <VStack w='full' h='400px'>
                    <CircularProgress isIndeterminate color='green.300' />
                </VStack>
            ) : (
                <VStack w='full' gap='30px'>
                    {data.map((item, i) => (

                        <TradingbotCard item={item} performance={item.profit_line} key={i} botTitle={item.bot_id === 1 && 'Day Trading Bot' || item.bot_id === 2 && 'Swing Trading Bot' || item.bot_id === 3 && 'Long-term Hold Bot'} />
                    ))}
                    {/* <TradingbotCard botTitle='Swing Trading Bot' /> */}
                    {/* <TradingbotCard botTitle='Long-term Hold Bot' /> */}
                </VStack>
            )}
        </>
    )
}
