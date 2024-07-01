import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    dispatch: React.Dispatch<OrderActions>
}

export const OrderTotals = ({order, tip, dispatch} : OrderTotalsProps) => {

    const subtotalAmount= useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

  return (
    <>
        <div className="space-y-3">
            <h2 className="font-black mt-6 text-2xl">Totales y Propina</h2>
            <p>Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>

            <p>Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>

            <p>Total a Pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>

         <button className="w-full bg-neutral-950 hover:bg-neutral-700 p-3 uppercase text-white font-bold mt-10"
         onClick={() => dispatch({type: "place-order"})}
         >
            Guardar Orden
         </button>
    </>
  )
}
