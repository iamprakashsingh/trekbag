//one method to display desired text on button is by passing it as props
//but here we will do it by using children prop
export default function Button({type,children}) {
  return (
    <button className={`btn ${type==='secondary'?'btn--secondary':''}`}>{children}</button>
  )
}
