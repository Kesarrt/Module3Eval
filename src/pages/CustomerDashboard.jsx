import{useContext} from"react";
import Navbar from".../components/Navbar";
import RestaurantCard from ".../components/RestaurantCard";

import{RestContext}from".../context/RestaurantContext";

export default function CustomerDashboard(){
    const{filtered}= useContext(RestContext);
    useContext(RestContext);
    return(
        <div>
            <Navbar/>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
                {filtered.map((d)=><RestaurantCard 
                key={d.restaurantID}data={d}
            isAdmin={false} />)}
            </div>
        </div>
    );
}
