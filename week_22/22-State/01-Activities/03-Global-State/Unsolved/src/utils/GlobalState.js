import React, { createContext, useContext } from "react";
import { useBookReducer } from './reducers';

//instantiate the global state object
const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({value = [], ...props}) => {
    const [ state, dispatch] = useBookReducer({
        books: [],
        currentBook: {},
    })

    return <Provider value = {[state, dispatch]} {...props}/>;

}

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext};
