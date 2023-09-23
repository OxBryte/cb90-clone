import { Box } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react'

export default function MarketOverview() {

    const divRef = useRef(null);
    

    useEffect(() => {
        if (divRef.current.querySelector('script[src="https://s3.tradingview.com/external-embedding/embed-widget-screener.js"]')) {
            return;
        }
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
        script.async = true;

        script.innerHTML = JSON.stringify({
            "width": "",
            "height": "100vh",
            "defaultColumn": "overview",
            "screener_type": "crypto_mkt",
            "displayCurrency": "USD",
            "colorTheme": "light",
            "isTransparent": true,
            "locale": "en"
        });

        divRef.current.appendChild(script);

    }, []);

    return (
        <Box className="tradingview-widget-container" ref={divRef}>
            <Box className="tradingview-widget-container__widget" ></Box>
        </Box>
    );
}
