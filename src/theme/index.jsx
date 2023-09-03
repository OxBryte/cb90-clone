import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const styles = {
    global: (props) => ({
        body: {
            bg: mode('#fff', '#fff')(props),
            color: '#181818'
        },
    }),
};

const colors = {
    brand: {
        100: '#181818',
        200: '#01B4B9',
        300: '#E6EEF1',
        400: '#00516F',
        500: '#004C4E',
        600: '#6B6B6B'
    },
};

const fonts = {
    // heading: `Montserrat, ${base.fonts.heading}`,
};


const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({ config, styles, colors, fonts });
export default theme;