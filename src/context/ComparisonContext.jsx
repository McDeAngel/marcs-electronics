import { createContext, useState } from "react";

export const ComparisonContext = createContext();

export const ComparisonProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);

  // Add to compare
  const addToCompare = (product) => {
    setCompareList((prev) => {
      if (prev.length >= 3) {
        alert("You can only compare up to 3 products");
        return prev;
      }
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.filter((item) => item.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // Remove from compare
  const removeFromCompare = (id) => {
    setCompareList((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all
  const clearCompare = () => {
    setCompareList([]);
  };

  return (
    <ComparisonContext.Provider
      value={{ compareList, addToCompare, removeFromCompare, clearCompare }}
    >
      {children}
    </ComparisonContext.Provider>
  );
};