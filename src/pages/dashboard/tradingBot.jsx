import { VStack } from '@chakra-ui/react'
import TradingbotCard from '../../components/botTrading/tradingbotCard'

export default function TradingBot() {
    return (
        <>
            <VStack w='full' gap='30px'>
                <TradingbotCard botTitle='Day Trading Bot' />
                <TradingbotCard botTitle='Swing Trading Bot' />
                <TradingbotCard botTitle='Long-term Hold Bot' />
            </VStack>
        </>
    )
}
