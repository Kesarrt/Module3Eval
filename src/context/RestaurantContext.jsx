import { createContext, useState, useEffect } from "react";

export const RestContext = createContext();

export const RestContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  
  // FIX 1: Changed ; to : inside the object
  const [filters, setFilters] = useState({ search: "", type: "all", sort: "asc" });

  // FIX 2: Removed space in useEffect
  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("evalData")) || []);
  }, []);

  const sync = (newData) => {
    setData(newData);
    localStorage.setItem("evalData", JSON.stringify(newData));
  };

  const add = (item) => {
    sync([...data, item]);
    alert("Added!");
  };

  const edit = (id, newItem) => {
    // FIX 3: Changed !== to === (We want to update the MATCHING id)
    sync(data.map((x) => (x.restaurantID === id ? newItem : x)));
    alert("Updated!");
  };

  const del = (id) => {
    if (window.confirm("Delete?")) {
      sync(data.filter((x) => x.restaurantID !== id));
      alert("Deleted!");
    }
  };

  // Filter Logic
  const filtered = data
    .filter((x) =>
      (filters.type === "all" || x.type === filters.type) &&
      x.restaurantName.toLowerCase().includes(filters.search.toLowerCase())
    )
    .sort((a, b) => 
      filters.sort === "asc" 
        // FIX 4: Fixed localCompare typo and sorting logic (a vs b)
        ? a.restaurantName.localeCompare(b.restaurantName)
        : b.restaurantName.localeCompare(a.restaurantName)
    );

  return (
    <RestContext.Provider value={{ data, filtered, add, edit, del, filters, setFilters }}>
      {children}
    </RestContext.Provider>
  );
};