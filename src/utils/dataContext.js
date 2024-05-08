// use this to pass data deep down to children in the tree

// import { useContext } from 'react';
// import dataContext from 'utils/dataContext';
// <dataContext.Provider value={{ val1, val2, etc }}></dataContext.Provider>
// const { val1, val2, etc } = useContext(dataContext);

import { createContext } from 'react';
const dataContext = createContext();

export default dataContext;
