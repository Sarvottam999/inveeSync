import { useContext } from 'react';
import { useRouter } from 'next/router';
import InventoryContext from '../../context/InventoryContext';

const OrderDetails = () => {
  const { orders, setOrders, items } = useContext(InventoryContext);
  const router = useRouter();
  const { id } = router.query;
  const order = orders.find(order => order.id === parseInt(id));

  if (!order) return <p>Order not found</p>;

  const markAsCompleted = () => {
    setOrders(orders.map(o => o.id === order.id ? { ...o, status: 'Completed' } : o));
  };
  var a  = [];
 

  return (
    <div className="container mx-auto p-4 text-xl">
      <div className='flex space-x-5'>
        <div className='bg-blue-600 text-white rounded-full p-3 h-16 w-16 flex justify-center items-center'>
          {order.customer[0]}
        </div>
        <div>
          <h1 className='font-semibold text-2xl'>{order.customer}</h1>
          <h1 className='text-slate-600 text-lg'>{order.status}</h1>

        </div>
        <div className="flex-grow"></div>
        <div className=''>
          <h1 className='font-normal text-3xl'>Order ID: #{order.id}</h1>
        </div>
      </div>







      <h1 className="text-xl font-bold mb-4 mt-10">Order Details <span className='font-normal text-slate-500'>({order.items.length})</span></h1>
       
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

      <table className="min-w-full  ">
        <thead className='bg-blue-900'>
          <tr className='text-left text-white'>
            <th className="px-6 py-3">Order ID</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Quantity</th>
            <th className="px-6 py-3">In Stock</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map(i => {
            console.log(i.name);
                      const inventoryItem = items.find(ii => ii.id === i.id);

            return (<tr key={i.id} className="border-t border-gray-200">
              <td className="px-6 py-3">{i.id}</td>
              <td className="px-6 py-3">{i.name}</td>
              <td className="px-6 py-3">{i.quantity}</td>
              <td className="px-6 py-3">{inventoryItem ? inventoryItem.stock : 'Unknown'}</td>
              
            </tr>)
         } )}
        </tbody>
      </table>
    </div>

      {/* <ul>
        {order.items.map(item => {
          const inventoryItem = items.find(i => i.id === item.id);
          return (
            <li key={item.id} className="mb-2">
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>In Stock:</strong> {inventoryItem ? inventoryItem.stock : 'Unknown'}</p>
            </li>
          );
        })}
      </ul> */}
      {order.status === 'Pending' && (
        <button onClick={markAsCompleted} className="bg-blue-900 text-white py-2 px-4 mt-4 rounded-lg">Mark as Completed</button>
      )}
    </div>
  );
};

export default OrderDetails;
