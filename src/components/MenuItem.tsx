
import { OrderActions } from "../reducers/order-reducer"
import type { MenuItem } from "../types"

type MenuItemProps = {
   item: MenuItem,
   dispatch: React.Dispatch<OrderActions>
}

export default function MenuItem({item, dispatch} : MenuItemProps) {
  return (
    <button className="flex justify-between w-full p-4 rounded-md border-2 border-blue-400 hover:bg-blue-200"
    onClick={() => dispatch({type: 'add-item', payload: {item}})}
    >
        <h2>{item.name}</h2>
        <h2 className="font-semibold">${item.price}</h2>
    </button>
  )
}
