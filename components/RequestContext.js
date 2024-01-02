import {createContext, useEffect, useState} from "react";

export const RequestContext = createContext({});

export function RequestContextProvider({children}) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [requests,setRequests] = useState([]);
  useEffect(() => {
    if (requests?.length > 0) {
      ls?.setItem('cart', JSON.stringify(requests));
    }
  }, [requests]);
  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setRequests(JSON.parse(ls.getItem('cart')));
    }
  }, []);
  function addProduct(productId) {
    setRequests(prev => [...prev,productId]);
  }
  function removeRequest(productId) {
    setRequests(prev => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value,index) => index !== pos);
      }
      return prev;
    });
  }
//   function clearCart() {
//     setRequests([]);
//   }
  return (
    <RequestContext.Provider value={{requests,setRequests,addProduct,removeRequest}}>
      {children}
    </RequestContext.Provider>
  );
}