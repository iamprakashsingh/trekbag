import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";

const sortingOptions = [
    {
        label: "Sort by default",
        value: "default"
    },
    {
        label: "Sort by unpacked",
        value: "unpacked"
    },
    {
        label: "Sort by packed",
        value: "packed"
    }
]

export default function ItemList({items,handleDelteItem,handleToggleItem}) {

    const [sortBy,setSortBy] = useState("default");

    // we are just cloning a new array and sorting it based on the sorting option selected by the user.
    const sortedItems = [...items].sort((a,b) => {
        if(sortBy === "default"){
            return 0;
        }
        if(sortBy === "unpacked"){
            return a.packed - b.packed;
        }
        if(sortBy === "packed"){
            return b.packed - a.packed;
        }
    })
  return (
    <ul>
        {items.length ===0 && <EmptyView/>}

        {/* using npm react-select for dropdown  */}
        {items.length>0?(
            <section className="sorting">
                <Select onChange={(option)=>setSortBy(option.value)} defaultValue={sortingOptions[0]} options={sortingOptions}/>
            </section>
        ):null}

        {
            sortedItems.map((item) => {
                return <Item key={item.id} item={item} handleDelteItem={handleDelteItem} 
                    handleToggleItem={handleToggleItem}
                />
            })
        }


    </ul>
  )
}

function Item({item,handleDelteItem,handleToggleItem}){
    return(
        <li className="item">
            <label>
                <input checked={item.packed} type="checkbox" onChange={()=>{
                    handleToggleItem(item.id);
                }}/>
                {item.name}
            </label>
            <button onClick={() => handleDelteItem(item.id)}>❌</button>
        </li>
    )
}


