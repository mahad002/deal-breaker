import {createContext, useEffect, useState} from "react";

export const OrderContext = createContext({});

export function OrderContextProvider({children}) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [orders,setOrders] = useState([]);
  useEffect(() => {
    if (orders?.length > 0) {
      ls?.setItem('cart', JSON.stringify(orders));
    }
  }, [orders]);
  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setOrders(JSON.parse(ls.getItem('cart')));
    }
  }, []);
  function addOrder(OrderId) {
    setOrders(prev => [...prev,OrderId]);
  }
  function removeOrder(OrderId) {
    setOrders(prev => {
      const pos = prev.indexOf(OrderId);
      if (pos !== -1) {
        return prev.filter((value,index) => index !== pos);
      }
      return prev;
    });
  }
  
  return (
    <OrderContext.Provider value={{orders,setOrders,addOrder,removeOrder}}>
      {children}
    </OrderContext.Provider>
  );
}