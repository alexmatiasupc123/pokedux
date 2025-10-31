export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

export const featuring = (store) => (next) => (actionInfo) => {
    const featured =  [{ name: 'eddie'},...actionInfo.action.payload];
    const updatedAction= { ...actionInfo, 
        action: { ...actionInfo.action, payload: featured }
     };
   next(updatedAction);
}

export const upper = (store) => (next) => (actionInfo) => {
    const upperCased = actionInfo.action.payload.map(pokemon => ({
        ...pokemon,
        name: pokemon.name.toUpperCase()
    }));
    const updatedAction= { ...actionInfo, 
        action: { ...actionInfo.action, payload: upperCased }
     };
   next(updatedAction);
}


