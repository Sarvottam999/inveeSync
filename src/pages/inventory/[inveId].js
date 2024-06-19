import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import InventoryContext from "../../context/InventoryContext";

const InventoryDetail = () => {
  // const { orders, setOrders, items } = useContext(InventoryContext);
  const { items, setItems } = useContext(InventoryContext);

  const router = useRouter();
  const [newItemName, setNewItemName] = useState("");
  const [newItemStock, setNewItemStock] = useState("");
  const { inveId } = router.query;

  const item = items.find((i) => i.id === parseInt(inveId));
  console.log(item);

  if (!item) return <p>item not found</p>;
  //   useEffect(() => {
  if (!newItemName) {
    setNewItemName(item.name);
    setNewItemStock(item.stock);
  }

  function onSubmit() {
    console.log("-----------");
    const updatedItems = items.map((i) =>
      i.id === item.id
        ? { ...i, name: newItemName, stock: parseInt(newItemStock) }
        : i
    );
    console.log(updatedItems);
    setItems(updatedItems);
    router.back(); 
  }

  return (
    <div className="flex justify-center  ">
      <div className="mb-4 flex flex-col items-center space-y-10 mt-20  ">
        <h1>Edit item</h1>
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
        <button
          onClick={onSubmit}
          className="bg-blue-900 text-white py-2 px-4 w-[100px] rounded-lg   "
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default InventoryDetail;
