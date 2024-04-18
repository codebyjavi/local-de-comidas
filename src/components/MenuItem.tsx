
import type { MenuItem } from "../types"

type MenuItemProps = {
   item: MenuItem,
   addItem: (item: MenuItem) => void
}

export default function MenuItem({item, addItem} : MenuItemProps) {
  return (
    <button className="flex justify-between w-full p-4 rounded-md border-2 border-blue-400 hover:bg-blue-200"
    onClick={() => addItem(item)}
    >
        <h2>{item.name}</h2>
        <h2 className="font-semibold">${item.price}</h2>
    </button>
  )
}
