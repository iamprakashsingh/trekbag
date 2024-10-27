//one method to display desired text on button is by passing it as props
//but here we will do it by using children prop
export default function Button({buttontype,children,onclick}) {
  return (
    <button className={`btn ${buttontype==='secondary'?'btn--secondary':''}`} onClick={onclick}>{children}</button>
  )
}
