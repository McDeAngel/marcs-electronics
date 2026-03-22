import { createContext, useState, useEffect } from "react";

export const RecentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({ children }) => {
  const [recentlyViewed, setRecentlyViewed] = useState([]);

  // Add product to recently viewed
  const addRecentlyViewed = (product) => {
    setRecentlyViewed((prev) => {
      const filtered = prev.filter((item) => item.id !== product.id);
      const updated = [product, ...filtered];
      return updated.slice(0, 5); // Keep only last 5
    });
  };

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("recentlyViewed");
    if (saved) {
      setRecentlyViewed(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage when changed
  useEffect(() => {
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, addRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
};