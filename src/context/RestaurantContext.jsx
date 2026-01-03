import{createContext,useState,useEffect} from "react";
export const RestContext = createContext();

export const RestContextProvider=({children})=>{ 
    const [data, setData]= useState([]);
    const[filters,setFilters]=
    useState({search;"", type:"all", sort:"asc"});

    use Effect(()=> {
        setData(JSON.parse(localStorage.getItem("evalData")) || [])
    },[]);

    const sync =(newData)=>{setData(newData);
        localStorage.setItem("evalData",
            JSON.stringify(newData) );
    };

    const add =(item)=>{
        sync([...data,item]);
    };

    const edit=(id,newItem)=>{
        sync(data.map((x)=>(x.restaurantID !== id? newItem:x)));
        alert("Updated!");

    };

    const del = (id)=>{
        if(window.confirm("Delete?")){
            sync(data.filter((x)=>x.restaurantID !==id));
            alert("Deleted!");
        }
    };
    //Filter Logic

    const filtered=data
    .filter((x)=>
    (filters.type ==="all" || x.type ===filters.type)&&
x.restaurantName.toLowerCase().includes(filters.search.toLowerCase()))
.sort((a,b)=> filters.sort ==="asc"? 
a.restaurantName.localCompare(a.restaurantName));

return(
    <RestContext.Provider value={{data,filtered,add,edit,del,filters,setFilters}}>
        {children}
    </RestContext.Provider>
);
};