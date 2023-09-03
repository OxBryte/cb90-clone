import Footer from '../footer';
import Navbar from '../navbar';

const Layout = ({ children, navbar = true, footer = true }) => {
    return (
        <>
            {navbar && <Navbar />}
            {children}
            {footer && <Footer />}
        </>
    );
};

export default Layout;
