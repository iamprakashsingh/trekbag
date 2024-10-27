export default function Counter({items,numberOfPacked}) {
  return (
    <div>
      <p><b>{numberOfPacked}</b>/{items.length} Items packed</p>
    </div>
  )
}
