import React, { useState } from "react";

export const MyContext = React.createContext();

export const ApplicationContextProvider = ({ children }) => {
  const [selectedCities, setSelectedCities] = useState([]);
  const [favoriteCities, setFavoriteCities] = useState([]);

  const value = {
    selectedCities,
    setSelectedCities,
    favoriteCities,
    setFavoriteCities,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
