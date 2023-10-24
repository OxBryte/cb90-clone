import { Box, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import DashboardNavbar from '../navbar/dashboardNavbar';
import AdminSidebar from '../sidebar/adminSidebar';

const AdminLayout = ({ children, sidebar = true, dashboardNav = true }) => {

    AdminLayout.propTypes = {
        children: PropTypes.node.isRequired,
        sidebar: PropTypes.bool,
        dashboardNav: PropTypes.bool
    };

    const isDesktop = useBreakpointValue({ base: false, lg: true })

    return (
        <>
            {isDesktop ? (
                <Grid templateColumns='repeat(5, 1fr)' gap={0}>
                    <GridItem colSpan={1}>
                        {sidebar && <AdminSidebar />}
                    </GridItem>
                    <GridItem colSpan={4} bg='brand.900'>
                        {dashboardNav && <DashboardNavbar />}
                        <Box m='30px'>
                            {children}
                        </Box>
                    </GridItem>
                </Grid>
            ) : (
                <>
                    <Box bg='brand.900'>
                        {dashboardNav && <DashboardNavbar />}
                        <Box p='30px' minH='90vh'>
                            {children}
                        </Box>
                    </Box>
                </>
            )}
        </>
    );
};

export default AdminLayout;
