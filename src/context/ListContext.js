import { createContext, useContext } from 'react';

export const ListContext = createContext([]);

export function useListContext() {
    const listContext = useContext(ListContext)
    
    return listContext
}

