import { createContext, useState } from 'react';

export const BotContext = createContext({
    performanceData: null,
    setPerformanceData: () => { }
});


export const BotProvider = ({ children }) => {
    const [performanceData, setPerformanceData] = useState(null);

    return (
        <BotContext.Provider value={{ performanceData, setPerformanceData }}>
            {children}
        </BotContext.Provider>
    );
};
