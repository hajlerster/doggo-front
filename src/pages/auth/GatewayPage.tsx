import BlankPage from "../page/BlankPage";
import React, {useEffect, useState} from "react";
import axios from "axios";

type GatewayPageProps = {
    children: React.ReactNode
    enpoint =: string
    location: string


}

export function GatewayPage(
    {children}: { children: React.ReactNode },
    endpoint = "",
    payload = {} ,
    location=  ""
) {

    const [redirectTo, setRedirectTo] = useState<string>("");

    useEffect(() => {
        if(location === undefined) {
            return;
        }
        if(endpoint

            !== ""){
            axios.get(
                `http://localhost/api/v1/${endpoint}`) // załóżmy, że tego endpointu używasz do zapytania, skąd przekierować użytkownika
                .then((response) => {
                    console.log(response)
                    location && setRedirectTo(location);
                })
                .catch((error) => {
                    console.error('Error while fetching API', error);
                });
        }


    }, []);

    useEffect(() => {
        //redirect in react  to location
        window.location.pathname = redirectTo;

    }, [redirectTo, history]);


    return (
        <>
            <BlankPage title={"Gateway Page"}
                       content={"This is the gateway page."}

            >
                {children}
            </BlankPage>
        </>
    );
}