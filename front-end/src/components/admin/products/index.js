import React, { Fragment, createContext, useReducer } from "react";
import AdminLayout from "../layout";
import ProductMenu from "./ProductMenu";
import ProductTable from "./ProductTable";
import { productState, productReducer } from "./ProductContext";

export const ProductContext = createContext();

const ProductComponent = () => {
  return (
    <div className="grid grid-cols-1 space-y-4 p-4">
      <ProductMenu />
      <ProductTable />
    </div>
  );
};

const Products = (props) => {

  const [data, dispatch] = useReducer(productReducer, productState);

  return (
    <Fragment>
      <ProductContext.Provider value={{ data, dispatch }}>
        <AdminLayout children={<ProductComponent />} />
      </ProductContext.Provider>
    </Fragment>
  );
};

export default Products;
