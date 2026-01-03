import{useContext} from"react";
import{Navigate}from "react-router-dom";
import{AuthContext}from".../context/AuthContext";

export default function
PrivateRoute({children,roleRequired}){
    const{isAuth,role}=
    useContext(AuthContext);

    return isAuth && role === roleRequired ?
    children:<Navigate to="/" />;
}