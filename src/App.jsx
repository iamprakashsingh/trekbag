import { initialItems } from "./lib/constants"
import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import ItemList from "./ItemList"
import Sidebar from "./Sidebar"

export default function App() {

  const [items,setitems] = useState(initialItems);

  const handleAddItem = (newItem) => {
    setitems((prevItems) => {
        return  [...prevItems, newItem];
    });
  };

  const handleRemoveItem = ()=>{
    return setitems([]);
  }

  const handleResettoInitial = ()=>{
    return setitems(initialItems);
  }

  const handleMarkAllAsCompleted = ()=>{
    setitems((prevItems) => {
      return prevItems.map((item) => {
        return {...item, packed:true};
      });
    });
  }

  const handleMarkAllAsInComplete = ()=>{
    setitems((prevItems) => {
      return prevItems.map((item) => {
        return {...item, packed:false};
      });
    });
  }

  const handleDelteItem = (id) => {
    setitems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if(item.id === id){
        return {...item, packed: !item.packed};
      }
      return item;
    });
    return setitems(newItems);
  }

  return (
    <div>
      <BackgroundHeading/>
      <main>
            <Header numberOfPacked = {
              items.filter((item) => item.packed).length
            } items={items}/>
            <ItemList items={items} handleDelteItem={handleDelteItem} handleToggleItem={handleToggleItem}/>
            <Sidebar handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem} handleResettoInitial={handleResettoInitial}
                  handleMarkAllAsCompleted={handleMarkAllAsCompleted} handleMarkAllAsInComplete={handleMarkAllAsInComplete}
            />
            
                
      </main>
      <Footer/>
    </div>
  )
}
