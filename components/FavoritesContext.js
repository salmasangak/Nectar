import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (item) => {
        setFavorites((prevFavorites) => {
            if (prevFavorites.some((favItem) => favItem.name === item.name)) {
                return prevFavorites;
            }
            return [...prevFavorites, item];
        });
    };

    const removeFromFavorites = (name) => {
        setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== name));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );
};
