import React, { createContext, useEffect, useReducer, useState } from "react";
import Cookies from "js-cookie"

import { useRouter } from "next/router";
import { toast } from "react-hot-toast";


export const Store = createContext();

const initialState = {

}



function reducer(state, action) {
        switch (action.type) {
                default:
                        return state;
        }
}


export function StoreProvider({ children }) {
        const router = useRouter();

        const [state, dispatch] = useReducer(reducer, initialState);
        const [screen, setScreen] = useState(0)
        const [scrollPos, setScrollPos] = useState(0);

        const refreshData = () => {
                router.replace(router.asPath);
        }

        useEffect(() => {
                function handleScroll() {
                        setScrollPos(window.pageYOffset);
                }
                //initialize
                handleScroll()

                window.addEventListener('scroll', handleScroll);

                return () => {
                        window.removeEventListener('scroll', handleScroll);
                };
        }, []);

        useEffect(() => {
                const handleResize = () => {
                        setScreen(window.innerWidth);
                }

                //initialize
                handleResize();

                window.addEventListener("resize", handleResize);

                return () => {
                        window.removeEventListener("resize", handleResize);
                };
        }, []);

        const value = { state, dispatch, refreshData, screen, scrollPos };

        return <Store.Provider value={value}>{children}</Store.Provider>;
}
