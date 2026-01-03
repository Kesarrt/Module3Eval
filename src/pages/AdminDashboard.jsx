import {useContext, useState, useRef, useEffect} from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import {RestContext} from "../context/RestaurantContext";

export default function AdminDashboard() {
  const {filtered, add} = useContext(RestContext);
  const ref = useRef();
  const [f, setF] = useState({restaurantName:"", address:"", type:"Rajasthani", parkingLot:"true", image:"https://bit.ly/3J6Q6rJ"});

  useEffect(()=>ref.current.focus(),[]);

  const sub = (e) => {
    e.preventDefault();
    if(!f.restaurantName) return alert("Empty");
    add({...f, restaurantID:Date.now(), parkingLot:f.parkingLot==="true"});
  };

  const h = (e) => setF({...f, [e.target.name]:e.target.value});

  return (
    <div>
      <Navbar />
      <form onSubmit={sub} style={{padding:10}}>
        <input ref={ref} name="restaurantName" placeholder="Name" onChange={h} />
        <input name="address" placeholder="Address" onChange={h} />
        <select name="type" onChange={h}><option>Rajasthani</option><option>Gujarati</option><option>Mughlai</option></select>
        <select name="parkingLot" onChange={h}><option value="true">Yes</option><option value="false">No</option></select>
        <button>Add</button>
      </form>
      <div>{filtered.map(d => <RestaurantCard key={d.restaurantID} data={d} isAdmin={true} />)}</div>
    </div>
  );
}