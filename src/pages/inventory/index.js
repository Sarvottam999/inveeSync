import { useContext, useState } from "react";
import InventoryContext from "../../context/InventoryContext";
import Link from "next/link";

const Inventory = () => {
  const { items, setItems } = useContext(InventoryContext);
  const [filterStock, setFilterStock] = useState("");

  const filteredItems = items.filter((item) => {
    if (filterStock === "inStock") return item.stock > 0;
    if (filterStock === "outOfStock") return item.stock === 0;
    return true;
  });

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    console.log(items);
    console.log(...items);
  };

  return (
    <div className="container mx-auto p-4 text-xl">
      <div className="mb-4 mt-20">
        <label className="mr-2">Filter by Stock:</label>
        <select
          className="px-4 py-2   rounded-xl"
          value={filterStock}
          onChange={(e) => setFilterStock(e.target.value)}
        >
          <option value="">All</option>
          <option value="inStock">In Stock</option>
          <option value="outOfStock">Out of Stock</option>
        </select>
      </div>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full ">
          <thead className="bg-blue-900">
            <tr className="text-left text-white">
              <th className="px-6 py-3 ">Item ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Stock</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((item) => (
              <tr key={item.id} className="border-t border-stone-700    ">
                <td className="px-6 py-3">{item.id}</td>
                <td className="px-6 py-3">{item.name}</td>
                <td className="px-6 py-3">{item.stock}</td>
                <td className="px- py-3   flex space-x-10">
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-red-500 text-white px-4 py-2   rounded-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                   <Link href={`/inventorys/${item.id}`} className="bg-gray-200 text-black px-4 py-2   rounded-xl">
                    {/* <span className="bg-blue-700 text-white px-4 py-2 rounded-xl ml-10 "> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                    {/* </span> */}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="  mt-10 ">
        <Link
          href={"/inventory/addNewInventory"}
          className=" bg-blue-900 text-white px-4 py-2 rounded-xl"
        >
          {" "}
          Add New Item
        </Link>
      </div>
    </div>
  );
};

export default Inventory;
