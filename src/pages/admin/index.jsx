import { useParams } from 'react-router-dom';
import { Spinner, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/userSlice';
import AdminLayout from '../../components/page-layout/adminLayout';

export default function Admin() {
    const { id } = useParams();
    const user = useSelector(selectUser);

    return (
        <AdminLayout sidebar={true} dashboardNav={true}>
            {
                id === 'dashboard' ? (
                    <Text>heeleeelelele</Text>
                ) : (
                    <Text w='full' display='flex' justifyContent='center'>Coming Soon... 👷‍♂️</Text>
                )
            }
        </AdminLayout>
    )
}
