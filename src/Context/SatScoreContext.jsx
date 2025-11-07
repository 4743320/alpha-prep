import { Children, createContext, useState } from "react";


export const SatScoreContext = createContext()

export function ScoreProvider({children}){
    const [scores, setScores] = useState({})


    const saveLocalScores =(moduleName, score)=>{

        setScores((prev)=>({
            ...prev, [moduleName]:score
        }))
    }

    return(
        <SatScoreContext.Provider value={{saveLocalScores,scores}}>
            {children}
        </SatScoreContext.Provider>
    )
    
}

// export default ScoreProvider
