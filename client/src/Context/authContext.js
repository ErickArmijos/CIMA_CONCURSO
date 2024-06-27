import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { loginRequest, registerRequest, verifyTokenRequest } from "../Api/auth.js";
import Cookies from "js-cookie"; 

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
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);


    // clear errors after 5 seconds
    useEffect(() => {
        if (errors.length > 0) {
        const timer = setTimeout(() => {
            setErrors([]);
        }, 5000);
        return () => clearTimeout(timer);
        }
    }, [errors]);


    const signUp = async (user) => {
      try {
          const res = await registerRequest(user);
          if (res.status === 200) {
              setUser(res.data);
              setIsAuthenticated(true);
          }
      } catch (error) {
          // console.log(error.response.data);
          // setErrors(Array.isArray(error.response.data.message) ? error.response.data.message : [error.response.data.message]);
      }
  };
  
  const logIn = async (user) => {
      try {
          const res = await loginRequest(user);
          setUser(res.data);
          setIsAuthenticated(true);
      } catch (error) {
          console.log(error);
          setErrors(Array.isArray(error.response.data.message) ? error.response.data.message : [error.response.data.message]);
      }
  };
    
      const logout = () => {
        Cookies.remove("token");
        setUser(null);
        setIsAuthenticated(false);
      };

      useEffect(() => {
        const checkLogin = async () => {
          const cookies = Cookies.get();
          if (!cookies.token) {
            setIsAuthenticated(false);
            setLoading(false);
            return;
          }
    
          try {
            const res = await verifyTokenRequest(cookies.token);
            console.log(res);
            if (!res.data) return setIsAuthenticated(false);
            setIsAuthenticated(true);
            setUser(res.data);
            setLoading(false);
          } catch (error) {
            setIsAuthenticated(false);
            setLoading(false);
          }
        };
        checkLogin();
      }, []);
    

    return (
        <AuthContext.Provider value={{ signUp, user,logIn,isAuthenticated, errors,logout,
            loading, }}>
            {children}
        </AuthContext.Provider>
    );
};
