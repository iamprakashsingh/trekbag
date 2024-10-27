import Button from "./Button";


export default function Buttongroup({handleRemoveItem,handleResettoInitial,handleMarkAllAsCompleted,handleMarkAllAsInComplete}) {
  
  return (
    <section className="button-group">

      <Button buttontype="secondary" onclick={handleMarkAllAsCompleted}>Mark all as completed</Button>
      <Button buttontype="secondary" onclick={handleMarkAllAsInComplete}>Mark all as incomplete</Button>
      <Button  buttontype="secondary" onclick={handleResettoInitial}>Reset to initial</Button>
      <Button  buttontype="secondary" onclick={handleRemoveItem}>Remove all items</Button>

      
    </section>
  )
}
