import { useParams } from 'react-router-dom';
import { Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import AdminLayout from '../../components/page-layout/adminLayout';
import AdminOverview from './overview';
import TradingBot from './tradingBot';

export default function Admin() {
    const { id } = useParams();
    const user = useSelector(selectUser);

    return (
        <AdminLayout sidebar={true} dashboardNav={true}>
            {
                id === 'dashboard' ? (
                    <AdminOverview />
                ) : id === 'tradingbot' ? (
                    <TradingBot />
                ) : (
                    <Text w='full' display='flex' justifyContent='center'>Coming Soon... 👷‍♂️</Text>
                )
            }
        </AdminLayout>
    )
}
