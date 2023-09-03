import { Box } from '@chakra-ui/react';
import Footer from '../footer';
import Navbar from '../navbar';

const PageLayout = ({ children, navbar = true, footer = true }) => {
  return (
    <Box mx="auto" maxW='1240px' px={{ base: '2', md: '4', lg: '8' }}>
      {navbar && <Navbar />}
      {children}
      {footer && <Footer />}
    </Box>
  );
};

export default PageLayout;
