import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
    dispatch: React.Dispatch<OrderActions>
}

export default function OrderContents({ order, dispatch } : OrderContentsProps) {
  return (
    <div>
        <h2 className="mb-10 text-4xl font-bold">Consumo</h2>
        <div className="space-y-3">
            {order.map( item => (
                <div key={item.id} className="flex justify-between items-center w-full p-2 border-b-2">
                    <div>
                        <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                        <p className="font-bold">Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}</p>
                    </div>
                    <button>
                        <i 
                            className='bx bx-x flex items-center justify-center text-lg size-8 p-2 rounded-full bg-red-500 text-white'
                            onClick={() => dispatch({type: 'remove-item', payload: {id: item.id}})}
                        >
                        </i>
                    </button>
                </div>
            ))}
        </div>
    </div>
  )
}
