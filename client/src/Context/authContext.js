import { createContext, useContext, useState } from "react";
import { registerRequest, loginRequest } from "../Api/axios.js";

export const AuthContext = createContext();

export const UseAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("Use useAuth must be used within an AuthProvider")
    }
    return context;

}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signUp = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
        } catch (error) {
            console.error("Error al registrar el usuario:", error);
        }
    };

    const logIn = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res.data);
            setUser(res.data);
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
        }
    };


    return (
        <AuthContext.Provider value={{ signUp, user,logIn }}>
            {children}
        </AuthContext.Provider>
    );
};
