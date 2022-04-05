import React from "react";
import { productService } from "../../api/services/products";

const ProductContext = React.createContext([]);

function ProductsProvider({ children }) {
  const [state, setState] = React.useState(false);
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    productService.getAllUsers().then(({ data }) => {
      setUser(data);
    });
  }, []);
  return (
    <ProductContext.Provider value={[{ state, setState, user }]}>
      {children}
    </ProductContext.Provider>
  );
}

const useProductContext = () => {
  const productContext = React.useContext(ProductContext);
  return productContext;
};

export { useProductContext, ProductsProvider };
