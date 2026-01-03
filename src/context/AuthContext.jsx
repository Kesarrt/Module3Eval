import{createContext,useState} from"react";
export const AuthContext=createContext();

export const AuthContextProvider=({children})=>{
    const [auth, setAuth]=useState({isAuth:localStorage.getItem("isAuth")==="true",
        role:localStorage.getItem("role")
    });

    const login = (role)=> {
        setAuth({isAuth:true,role});
        localStorage.setItem("isAuth","true");
        localStorage.setItem("role",role);
    };


    const logout=()=>{
        setAuth({isAuth:false,role:null})
        localStorage.clear();
    };

    return(
        <AuthContext.Provider value={{...auth,login,logout}}>
            {children}
        </AuthContext.Provider>
    );
};