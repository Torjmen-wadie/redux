const cartReducer=(state,action) =>{
    switch (action.type) {
      case 'ADD_ITEM':
        const existingProduct = state.find(item => item.id === action.payload.id);
            if (existingProduct) {
                return state.map(elem => elem.id === action.payload.id ? { ...elem, quantity: elem.quantity + 1 } : elem)
            } else {
              return  [...state, { ...action.payload, quantity: 1 }]
    };
    case 'REMOVE_ITEM':
      const filtredCard = state.filter(item => item.id !== action.payload.id );
    return filtredCard;
    ;
    case 'UPDATE_ITEM':
      const updated= state.map(elem => elem.id === action.payload.id ? {...elem, quantity: Math.max(action.payload.newQuantity,0)}: elem)
      return updated
    
    ;
      default:
        return state
    }
  }

  export default cartReducer;