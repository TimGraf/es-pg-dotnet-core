import React, { useState, createContext } from "react";

export const CarsContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const CarsContextProvider = props => {
    const [filterSearch, setFilterSearch] = useState({
      year: 2010,
      make: '',
      model: '',
      color: '',
      query: ''
    });

  return (
    <CarsContext.Provider value={[{filterSearch, setFilterSearch}]}>
      {props.children}
    </CarsContext.Provider>
  );
};