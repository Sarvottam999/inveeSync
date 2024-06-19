import { useContext, useState } from 'react';
import Link from 'next/link';
import InventoryContext from '../context/InventoryContext';

const Orders = () => {
  const { orders } = useContext(InventoryContext);
  const [filterStatus, setFilterStatus] = useState('');
  const [sortField, setSortField] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = orders
    .filter(order => 
      (!filterStatus || order.status === filterStatus) &&
      (!searchQuery || order.customer.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortField === 'customer') return a.customer.localeCompare(b.customer);
      if (sortField === 'itemCount') return b.items.length - a.items.length;
      return 0;
    });

  return (
    <div className="container mx-auto p-4 flex-1 text-xl">
      <div className='flex flex-col md:flex-row justify-start space-x-0 md:space-x-16 mt-20 mb-10'>
        <div className="mb-4">
          <label className="mr-2">Search:</label>
          <input
            type="text"
            className='px-4 py-2 rounded-xl border'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by customer"
          />
        </div>
        <div className="mb-4">
          <label className="mr-2">Filter by:</label>
          <select
            className='px-4 py-2 rounded-xl border'
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="mr-2">Sort by:</label>
          <select
            className='px-4 py-2 rounded-xl border'
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value="">None</option>
            <option value="customer">Customer Name</option>
            <option value="itemCount">Item Count</option>
          </select>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full">
          <thead className='bg-blue-900'>
            <tr className='text-left text-white'>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Item Count</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(order => (
              <tr key={order.id} className="border-t border-stone-700">
                <td className="px-6 py-3">{order.id}</td>
                <td className="px-6 py-3">{order.customer}</td>
                <td className="px-6 py-3">{order.status}</td>
                <td className="px-6 py-3">{order.items.length}</td>
                <td className="px-6 py-3">
                  <Link href={`/orders/${order.id}`}>
                    <span className="text-blue-500">View Details</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
