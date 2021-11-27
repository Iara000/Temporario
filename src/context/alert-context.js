import React, { useState } from "react";

const AlertContext = React.createContext({
    display: false,
    title: "",
    message: ""
})

export const AlertContextProvider = props => {
    const [display, setDisplay] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const alertClose = () => {
        setTitle("");
        setMessage("");
        setDisplay(false);
    };

    const alertOpen = (title, message) => {
        setTitle(title);
        setMessage(message);
        setDisplay(true);

        setTimeout( () => {
            alertClose();
        }, 6000);
    };

    const contextValue = {
        display,
        title,
        message,
        alertOpen,
        alertClose
    };

    return(
        <AlertContext.Provider value={contextValue}>
            {props.children}
        </AlertContext.Provider>
    )
}

export default AlertContext;

