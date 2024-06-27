import { useState } from "react";

export default function useOrder(){

    const [tip, setTip] = useState(0)

    const placeOrder = () => {
        setTip(0)
    }

    return {
        tip,
        setTip,
        placeOrder
    }
}
