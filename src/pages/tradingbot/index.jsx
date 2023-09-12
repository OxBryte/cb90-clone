import { VStack } from '@chakra-ui/react'
import DashboardLayout from '../../components/page-layout/dashboardLayout'
import TradingbotCard from '../../components/botTrading/tradingbotCard'

export default function TradingBot() {
    return (
        <DashboardLayout sidebar={true} dashboardNav={true}>
            <VStack w='full' gap='30px'>
                <TradingbotCard botTitle='Day Trading Bot' />
                <TradingbotCard botTitle='Swing Trading Bot' />
                <TradingbotCard botTitle='Long-term Hold Bot' />
            </VStack>
        </DashboardLayout>
    )
}
