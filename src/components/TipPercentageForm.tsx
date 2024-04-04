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
    setTip: React.Dispatch<React.SetStateAction<number>>
}

export default function TipPercentageForm({setTip} : TipPercentageFormProps) {
  return (
    <div>
        <h3 className="mb-2 text-xl">Propina: </h3>
        
        <form className="">
            {tipOptions.map(tip => (
            <div key={tip.id} className="flex items-center gap-x-3">
                <input
                    className="size-5"
                    id={tip.id}
                    type="radio"
                    name="tip"
                    value={tip.value}
                    onChange={(e) => setTip(+e.target.value)}
                />
                <label className="text-lg" htmlFor={tip.id}>{tip.label}</label>
            </div>
            ))}
            
        </form>
    </div>
  )
}
