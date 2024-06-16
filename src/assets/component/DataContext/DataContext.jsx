// import { createContext, useReducer, useState } from 'react';
// import PropTypes from 'prop-types';

// export const FormDataContext = createContext();

// export const FormDataProvider = ({ children }) => {
//   const [employees, setEmployees] = useState([]);

//   const addEmployee = (newEmployee) => {
//     setEmployees([...employees, newEmployee]);
//   };
//   return (
//     <FormDataContext.Provider value={{ employees, addEmployee }}>
//       {children}
//     </FormDataContext.Provider>
//   );
// };

// FormDataProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };


// // Créer le contexte
// const AppContext = createContext();

// // Réducteur pour gérer l'état
// const initialState = {
//   data: null, // Remplacez par la structure de vos données initiales
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'SET_DATA':
//       return { ...state, data: action.payload };
//     default:
//       return state;
//   }
// };

// // Créer le fournisseur de contexte
// const AppProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   // Fonction pour mettre à jour les données
//   const setData = (data) => {
//     dispatch({ type: 'SET_DATA', payload: data });
//   };

//   return (
//     <AppContext.Provider value={{ state, setData }}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export { AppContext, AppProvider };
