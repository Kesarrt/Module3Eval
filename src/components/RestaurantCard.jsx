import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {RestContext} from "../context/RestaurantContext";

export default function RestaurantCard({data, isAdmin}) {
  const {del} = useContext(RestContext);
  const nav = useNavigate();

  return (
    <div style={{border:"1px solid black", margin:10, padding:10, background:"white"}}>
      <img src={data.image} height="80" alt="res" />
      <h4>{data.restaurantName}</h4>
      <p>{data.type} | {data.address}</p>
      {isAdmin && (
        <>
          <button onClick={()=>nav(`/admin/restaurants/update/${data.restaurantID}`)}>Edit</button>
          <button onClick={()=>del(data.restaurantID)}>Delete</button>
        </>
      )}
    </div>
  );
}