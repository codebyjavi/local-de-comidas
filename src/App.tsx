import MenuItem from "./components/MenuItem"
import OrderContents from "./components/OrderContents"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, addItem } = useOrder()

  return (
    <>
      <header className="bg-blue-500 text-white font-bold text-center text-4xl py-6">
        <h1>Local de comidas</h1>
        
      </header>

      <main className="grid md:grid-cols-2 md:gap-x-10 max-w-5xl mx-auto my-4 md:my-16">
        <div className="p-4">
          <h2 className="mb-10 text-4xl font-bold">Menú</h2>
          <div className="md:text-xl space-y-2">
            {menuItems.map(item => 
                <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
                />
            )}
          </div>
        </div>
        
        <div className="p-4">
          <OrderContents
            order={order}
          />

        </div>
      </main>
    </>
  )
}

export default App
