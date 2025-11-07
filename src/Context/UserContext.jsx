import { createContext, useEffect, useState } from "react";
import { account, ID } from "../lib/appwrite";
// import { ID } from "appwrite";


export const UserContext = createContext()

export function UserProvider({children}){

    const [user, setUser] = useState(null)
    const[authChecked, setAuthChecked] = useState(false)

    
    const signIn = async(email, password)=>{

        try {
            await account.createEmailPasswordSession(email,password)
            const response = await account.get()
            setUser(response)
            await getInitialUserValue(); // 👈 ensures user updates everywhere

        } catch (error) {
            throw new Error(error.message)
        }
    }

    const signUp = async(name,email, password)=>{

        try {
            await account.create(ID.unique(), email, password, name);
            await signIn(email,password)

        } catch (error) {
            throw new Error(error.message)
        }
    }

    const getInitialUserValue= async()=>{
        try {
            
            const response = await account.get()
            setUser(response)

        } catch (error) {
            setUser(null)

        }
        finally{
            setAuthChecked(true)
        }
    }
    const logOut= async()=>{
        try {
            await account.deleteSession("current")
            setUser(null)
        } catch (error) {
            throw new Error(error.message);
            
        }
    }




    useEffect(()=>{
        getInitialUserValue()
    },[])

return(
    <UserContext.Provider value={{user, authChecked, signIn, signUp, logOut}}>

        {children}
    </UserContext.Provider>
)

}

// import { createContext, useEffect, useState } from "react";
// import { account } from "../lib/appwrite";
// import { ID } from "appwrite";

// export const UserContext = createContext();

// export function UserProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [authChecked, setAuthChecked] = useState(false);

//   const signIn = async (email, password) => {
//     try {
//       console.log("🔑 Signing in user...");
//       await account.createEmailPasswordSession(email, password);
//       const response = await account.get();
//       console.log("✅ Signed in successfully:", response);
//       setUser(response);
//     } catch (error) {
//       console.error("❌ Sign-in error:", error);
//       throw new Error(error.message);
//     }
//   };

//   const signUp = async (email, password) => {
//     try {
//       console.log("🆕 Signing up user...");
//       await account.create(ID.unique(), email, password);
//       await signIn(email, password);
//       console.log("✅ User signed up successfully!");
//     } catch (error) {
//       console.error("❌ Sign-up error:", error);
//       throw new Error(error.message);
//     }
//   };

//   const getInitialUserValue = async () => {
//     console.log("⚙️ Checking existing session...");
//     try {
//       const response = await account.get();
//       console.log("✅ Existing session found:", response);
//       setUser(response);
//     } catch (error) {
//       console.warn("⚠️ No existing session:", error.message);
//       setUser(null);
//     } finally {
//       setAuthChecked(true);
//       console.log("✅ Auth check complete");
//     }
//   };

//   const logOut = async () => {
//     try {
//       console.log("🚪 Logging out user...");
//       await account.deleteSession("current");
//       setUser(null);
//       console.log("✅ Logged out successfully!");
//     } catch (error) {
//       console.error("❌ Logout error:", error);
//       throw new Error(error.message);
//     }
//   };

//   useEffect(() => {
//     getInitialUserValue();
//   }, []);

//   useEffect(() => {
//     console.log("👤 Current user state changed:", user);
//   }, [user]);

//   return (
//     <UserContext.Provider value={{ user, authChecked, signIn, signUp, logOut }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
