import{useContext,useState,useEffect} from "react";
import { useParams,useNavigate } from "react-router-dom";
import { RestContext } from "../context/RestaurantContext";

export default function EditRestaurant(){
    const{id}=useParams();
    const nav=useNavigate();
    const{data,edit}= useContext(RestContext);
    const[f,setF]=useState(null);


    useEffect(()=> {
        const item = data.find((r)=> r.restaurantID==id);
        if(item) setF({...item,ParkingLot:item.parkingLot.toString()});
    }, [id,data]);

    const sub =()=>{
        if(window.confirm("Update?")){
            edit(id,{...f,parkingLot:f.parkingLot ==="true"});
            nav("/admin/dashboard")
        }
    };


    if(!f) return <div>Loading...</div>;
    return(
        <div>
            <input value ={f.restaurantName}
            onChange={(e)=>setF({...f,restaurantName:e.target.value})} />
           < input value ={f.address}
           onChangeCapture={(e)=>setF({...f,address:e.target.value})} />
           <select value={f.parkingLot}
           onChange={(e)=>setF({...f,parkingLot:e.target.value})}><option value="true">Yes</option> <option value="false">No</option> </select>
           <button onClick={sub}>Update</button>
        </div>

    );
}