import React, {useContext, useEffect, useState} from "react";
import Cookies from 'js-cookie';
import JsonContext from "./JsonContext";

interface DecodedToken {
    user_id: string;
    roles: string[];
    // add other properties as needed
}

export default function TokenContextProvider(props: { children: React.ReactNode }) {

    const [token, setToken] = useState<string | undefined>(() => {
        const token = Cookies.get('TOKEN');
        if (token) {
            return token;
        }
        return undefined;
    });

    const handleSetToken = (token: string) => {
        console.log('token : ', token)
        setToken(token);
        console.log('token : ', token)
        Cookies.set('TOKEN', token);
        console.log('token : ', token)
    };


    return (
        // @ts-ignore
        <JsonContext.Provider value={{ token, setToken: handleSetToken }}>
            {props.children}
        </JsonContext.Provider>
    );
}
