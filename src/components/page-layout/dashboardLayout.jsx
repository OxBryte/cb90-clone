import { Box, Grid, GridItem } from '@chakra-ui/react';
import Sidebar from '../sidebar';
import DashboardNavbar from '../navbar/dashboardNavbar';

const DashboardLayout = ({ children, sidebar = true, dashboardNav = true }) => {
    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={0}>
            <GridItem colSpan={1}>
                {sidebar && <Sidebar />}
            </GridItem>
            <GridItem colSpan={4} bg='brand.900'>
                {dashboardNav && <DashboardNavbar />}
                <Box m='20px'>
                    {children}
                </Box>
            </GridItem>
        </Grid>
    );
};

export default DashboardLayout;
