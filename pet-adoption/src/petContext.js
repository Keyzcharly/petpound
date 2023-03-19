import React, { createContext, useContext, useEffect, useState } from 'react';

const PetContext = createContext();

export const usePetContext = () => {
    return useContext(PetContext);
};

export const PetProvider = ({children}) => {
    const [petId, setPetId] = useState('');

    // get pet id value
    const getPetId = (id) => {
        setPetId(id);
    };

    const value = {
        getPetId,
        petId
    };

    // context provider
    return(
        <PetContext.Provider value={value}>
            {children}
        </PetContext.Provider>
    )
}; 