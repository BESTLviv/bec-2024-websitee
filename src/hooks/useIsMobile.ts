"use client"
import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 1024) => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < breakpoint);
        };

        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < breakpoint);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [breakpoint]);

    return isMobile;
};

export default useIsMobile;
