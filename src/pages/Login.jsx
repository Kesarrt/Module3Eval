import{useContext,UseState}from "react";
import{AuthContext} from"../context/AuthContext";
import {useNavigate}from "react-router-dom";

export default function Login(){
    const{login}=useContext(AuthContext);
    const[f , setF]= useState({email:"",pass:""});

    const nav=useNavigate();

    const sub =(e)=>{
        e.preventDefault();
        if (f.email==="admin@gmail.com" &&
            f.pass==="admin1234"
        ){
            login("Admin");nav("/admin/dashboard");
        } else if(f.email === "customer@gmail.com" && f.pass==="customer1234"){
            login("Customer");nav("/customers/dashboard");
        } else {alert("Invalid");}
        
        };

        return(
            <form onSubmit={sub}>
                <input placeholder="Email"
                onChange={(e)=>setF({...f,email:e.target.value})} />

                <input type="password"
                placeholder="Pass"onChange={(e)=>setF({...f,pass:e.target.value})} />
                <button>Login</button>
            </form>
        );
    }
