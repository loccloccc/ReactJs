type Action = {
  type: string;
  payload: any;
};

const initialState = {
  cart: [
    {
      id: 1,
      title: "Cake",
      price: 10,
      quantity: 3,
    },
    {
      id: 2,
      title: "Hamburger",
      price: 15,
      quantity: 5,
    },
  ],
};

export const reducerCart = (state = initialState, action: Action) => {
  switch (action.type) {
    case "INCREMENT": {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.cart[index].quantity += 1;
      }
      return JSON.parse(JSON.stringify(state));
    }

    case "DECREMENT": {
      const index2 = state.cart.findIndex((item) => item.id === action.payload.id);
      if (index2 !== -1 && state.cart[index2].quantity > 1) {
        state.cart[index2].quantity -= 1;
      }
      return JSON.parse(JSON.stringify(state));
    }

    case "REMOVE": {
      const newCart = state.cart.filter((item) => item.id !== action.payload.id);
      return { ...state, cart: newCart };
    }

    default:
      return state;
  }
};
