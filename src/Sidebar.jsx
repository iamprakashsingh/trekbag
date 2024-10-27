import AddItemForm from "./AddItemForm";
import Buttongroup from "./Buttongroup";


export default function Sidebar({handleAddItem,handleRemoveItem,handleResettoInitial,handleMarkAllAsCompleted,handleMarkAllAsInComplete}) {
  return (
    <div className="sidebar">
        <AddItemForm handleAddItem={handleAddItem} />
        <Buttongroup handleRemoveItem={handleRemoveItem} handleResettoInitial={handleResettoInitial} 
            handleMarkAllAsCompleted={handleMarkAllAsCompleted} handleMarkAllAsInComplete={handleMarkAllAsInComplete}
        />
    </div>
  )
}
