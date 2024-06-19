import { createContext, useState, useEffect } from 'react';
 import myData from "../data/data.json"

const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file
    const fetchData =   () => {
      try {
     
        setOrders(myData.orders);
        setItems(myData.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

     const savedOrders = JSON.parse(localStorage.getItem('orderss'));
    const savedItems = JSON.parse(localStorage.getItem('itemss'));

    if (savedOrders && savedItems) {
      setOrders(savedOrders);
      setItems(savedItems);
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
    localStorage.setItem('items', JSON.stringify(items));
  }, [orders, items]);

  return (
    <InventoryContext.Provider value={{ orders, setOrders, items, setItems }}>
      {children}
    </InventoryContext.Provider>
  );
};

export default InventoryContext; 