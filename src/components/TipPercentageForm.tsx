import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

type TipPercentageFormProps = {
    dispatch: React.Dispatch<OrderActions>
    tip: number
}

export default function TipPercentageForm({dispatch, tip} : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="font-black mt-6 mb-3 text-2xl">Propina: </h3>
        
        <form className="">
            {tipOptions.map(tipOption => (
            <div key={tipOption.id} className="flex items-center gap-x-3">
                <input
                    className="size-5"
                    id={tipOption.id}
                    type="radio"
                    name="tip"
                    value={tipOption.value}
                    onChange={(e) => dispatch({type: 'add-tip', payload: {quantity: +e.target.value}})}
                    checked={tipOption.value === tip}
                />
                <label className="text-lg" htmlFor={tipOption.id}>{tipOption.label}</label>
            </div>
            ))}
            
        </form>
    </div>
  )
}
