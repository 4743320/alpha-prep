import { useContext } from "react";
import { UserContext } from "../Context/UserContext";


export function userUser(){
    const context = useContext(UserContext)

    if(!userUser)
        throw new Error("useUser must be within useProvider");

    return context
        
}
