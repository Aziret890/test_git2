import React, { createContext, useContext, useEffect, useState } from "react";

const provaider = createContext();
export const useProvaider = () => useContext(provaider);
function Contexts({ children }) {
  const [datas, setDatas] = useState([]);

  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  useEffect(() => {
    prod();
  }, []);
  function prod() {
    let data = JSON.parse(localStorage.getItem("data")) || [];
    setDatas(data);
    localStorage.setItem("data", JSON.stringify(data));
  }
  let values = { datas, setDatas, basket, setBasket };
  return <provaider.Provider value={values}>{children}</provaider.Provider>;
}

export default Contexts;
/**
import React, { createContext, useContext, useEffect, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

function ProductContext({ children }) {
  const [data1, setData1] = useState(
    JSON.parse(localStorage.getItem("data")) || []
  );
  const [basket, setBasket] = useState(
    JSON.parse(localStorage.getItem("basket")) || []
  );
  //   const [deleteData, setDeleteData] = useState([]);

  const values = { data1, setData1, basket, setBasket };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
}

export default ProductContext;

 */
