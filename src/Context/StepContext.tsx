'use client'
import React, { createContext, useContext, useState } from 'react';
import StepContextType from '../interfaces/interface'


const StepContext = createContext<StepContextType | undefined>(undefined);

export const StepProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [step, setStep] = useState<number>(0);

    return (
        // @ts-expect-error: "error"
        <StepContext.Provider value={{ step, setStep }}>
            {children}
        </StepContext.Provider>
    );
};

export const useStepContext = () => {
    const context = useContext(StepContext);
    if (context === undefined) {
        throw new Error('useStepContext must be used within a StepProvider');
    }
    return context;
};
