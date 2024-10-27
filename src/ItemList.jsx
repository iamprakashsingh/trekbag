import EmptyView from "./EmptyView";


export default function ItemList({items,handleDelteItem,handleToggleItem}) {
    
  return (
    <ul>
        {items.length ===0 && <EmptyView/>}
        {
            items.map((item) => {
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


