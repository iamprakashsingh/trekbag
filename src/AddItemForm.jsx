import Button from "./Button";
import { useRef, useState } from "react";
export default function AddItemForm({handleAddItem}) {
    const [newItem,setnewItem] = useState("");
    const inputRef = useRef();

    const handleSubmit = (e)=>{
      e.preventDefault();

      if(!newItem.trim()){

        alert("Item name cannot be empty");
        inputRef.current.focus();
        return;
      }

      const nwInput = {
          id : new Date().getTime(),
          name : newItem,
          packed : false,
      };

      handleAddItem(nwInput);
      setnewItem("");

  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
        <input ref={inputRef} type="text"  onChange={(e)=>{
            
            setnewItem(e.target.value);
        }} value={newItem} autoFocus />
        <Button>Add to list</Button>
    </form>
  )
}
