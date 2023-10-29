import { useParams } from 'react-router-dom';
import DashboardLayout from '../../components/page-layout/dashboardLayout'
import Overview from './overview'
import { Text } from '@chakra-ui/react';
import TradingBot from './tradingBot';
import Exchange from './exchange';
import Settings from './settings';
import Support from './support';
import MarketOverview from './marketOverview';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice'

export default function Dashboard() {
    const { id } = useParams();
    const user = useSelector(selectUser);

    return (
        <DashboardLayout sidebar={true} dashboardNav={true}>
            {
                id === 'dashboard' ? (
                    <Overview />
                ) : id === 'tradingbot' ? (
                    <TradingBot />
                ) : id === 'exchange' ? (
                    <Exchange />
                ) : id === 'market-trend' ? (
                    <MarketOverview />
                ) : id === 'settings' ? (
                    <Settings />
                ) : id === 'support' ? (
                    <Support />
                ) : (
                    <Text as='a' href='/admin/dashboard' w='full' display='flex' justifyContent='center'>Coming Soon... 👷‍♂️</Text>
                )
            }
        </DashboardLayout>
    )
}
