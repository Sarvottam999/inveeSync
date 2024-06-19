import InventoryContext from '@/context/InventoryContext';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react'
const AddNewInventory = () => {
  const { items, setItems } = useContext(InventoryContext);
  const router = useRouter();

    const [newItemName, setNewItemName] = useState('');
    const [newItemStock, setNewItemStock] = useState('');
    const addItem = () => {
        const newItem = {
          id: items.length + 1,
          name: newItemName,
          stock: parseInt(newItemStock),
        };
        setItems([...items, newItem]);
        setNewItemName('');
        setNewItemStock('');
        router.push("/inventory")
      };
  
  return (
    <div className='flex justify-center  '>

    <div className="mb-4 flex flex-col items-center space-y-10 mt-20  ">

    <h2 className="text-xl font-bold mt-4">Add New Item</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Item Name"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          className="border py-2 px-4 mr-2 rounded-lg"
        />
        <input
          type="number"
          placeholder="Stock Level"
          value={newItemStock}
          onChange={(e) => setNewItemStock(e.target.value)}
          className="border py-2 px-4 mr-2 rounded-lg"
        />
        <button onClick={addItem} className="bg-blue-900 text-white py-2 px-4 w-[100px] rounded-lg">Add Item</button>
    </div>

    </div>
    </div>


   );
}

export default AddNewInventory