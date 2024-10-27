import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ items,numberOfPacked}) {
  return (
    <header>
        <Logo/>
        <Counter items =  {items} numberOfPacked={numberOfPacked}/>
    </header>
  )
}
