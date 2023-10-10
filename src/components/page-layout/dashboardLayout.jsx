import { Box, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import Sidebar from '../sidebar';
import DashboardNavbar from '../navbar/dashboardNavbar';

const DashboardLayout = ({ children, sidebar = true, dashboardNav = true }) => {

    DashboardLayout.propTypes = {
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
                        {sidebar && <Sidebar />}
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
                        <Box p='30px'>
                            {children}
                        </Box>
                    </Box>
                </>
            )}
        </>
    );
};

export default DashboardLayout;
