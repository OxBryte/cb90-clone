import { useParams } from 'react-router-dom';
import DashboardLayout from '../../components/page-layout/dashboardLayout'
import Overview from './overview'
import { Text } from '@chakra-ui/react';
import TradingBot from './tradingBot';
import Alerts from './alerts';
import Exchange from './exchange';
import Settings from './settings';
import Support from './support';
import MarketOverview from './marketOverview';

export default function Dashboard() {
    const { id } = useParams();

    return (
        <DashboardLayout sidebar={true} dashboardNav={true}>
            {
                id === 'dashboard' ? (
                    <Overview />
                ) : id === 'tradingbot' ? (
                    <TradingBot />
                ) : id === 'alerts' ? (
                    <Alerts />
                ) : id === 'exchange' ? (
                    <Exchange />
                ) : id === 'market-trend' ? (
                    <MarketOverview />
                ) : id === 'settings' ? (
                    <Settings />
                ) : id === 'support' ? (
                    <Support />
                ) : (
                    <Text w='full' display='flex' justifyContent='center'>Be Patient... 👷‍♂️</Text>
                )
            }
        </DashboardLayout>
    )
}
