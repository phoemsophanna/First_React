import { createContext, useContext, useState } from "react";

const products = createContext();
export const products_use = () => useContext(products);
const Context = ({ children }) => {
  const [toggle, setToggle] = useState(false);
  function toggleHandler() {
    setToggle(!toggle);
  }
  return (
    <products.Provider value={{ toggle, toggleHandler }}>
      {children}
    </products.Provider>
  );
};

export default Context;
