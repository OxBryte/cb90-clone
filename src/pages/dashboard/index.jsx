import { useParams } from 'react-router-dom';
import DashboardLayout from '../../components/page-layout/dashboardLayout'
import Overview from './overview'
import { Text } from '@chakra-ui/react';
import TradingBot from './tradingBot';

export default function Dashboard() {
    const { id } = useParams();

    return (
        <DashboardLayout sidebar={true} dashboardNav={true}>
            {
                id === 'dashboard' ? (
                    <Overview />
                ) : id === 'tradingbot' ? (
                    <TradingBot />
                ) : (
                    <Text w='full' display='flex' justifyContent='center'>Be Patient... 👷‍♂️</Text>
                )
            }
        </DashboardLayout>
    )
}
