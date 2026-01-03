import {useContext } from"react";
import{AuthContext} from"../context/AuthContext";
import { RestContext } from "../context/RestaurantContext";

export default function Navbar(){ const{logout,role}=useContext(AuthContext);
const {setFilters}=useContext(RestContext);
return(
    <div style={{display:"flex",
        justifyContent:"space-between",padding:10,background:"#ddd"
    }}>
        <b>App({role})</b>
        <input placeholder="Search..."
        onCharge={(e)=>setFilters(prev=>({...prev,search:e,target.value}))} />
        <button onClick={logout}>Logout</button>
        </div>
);
}