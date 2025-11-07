import { useContext } from "react"
import { SatScoreContext } from "../Context/SatScoreContext"



export const useSatScore =()=>{
    const context = useContext(SatScoreContext)
    if (!context)
        throw new Error("useSatScore must be used within a SatScoreProvider");

    return context
    
        
} 