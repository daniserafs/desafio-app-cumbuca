import { useState } from "react";

function useProductList() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "BTS MEMORIES",
      supply: 1,
      value: 400,
      total: "supply X value",
    },
  ]);

  function saveProduct(newProduct) {
    setProductList([...productList, newProduct]);
  }

  return { productList, saveProduct };
}

export default useProductList;
