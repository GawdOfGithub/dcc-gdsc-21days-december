import  { createContext,  useState } from 'react';

// Create the context
const AuthContext = createContext();

// Create a context provider component
const AuthContextProvider = ({ children }) => {
  const [value, setValue] = useState('Default Value');

  const updateValue = (newValue) => {
    setValue(newValue);
  };

  return (
    <AuthContext.Provider value={{ value, updateValue }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the context


export default AuthContextProvider;