import { shoeArr } from "../../data";

let initialState = {
  shoeArr: shoeArr,
  detail: shoeArr[0],
  cart: [],
};

export let shoeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VIEW_DETAIL": {
      console.log("nhảy", action.payload);
      state.detail = action.payload;
      return { ...state };
    }
    case "ADD_SHOE": {
      console.log("them", action.payload);

      let newCart = [...state.cart];
      let index = newCart.findIndex((item) => {
        return item.id === action.payload.id;
      });
      if (index === -1) {
        let newShoe = { ...action.payload, cartQuantity: 1 };
        newCart.push(newShoe);
      } else {
        newCart[index].cartQuantity++;
      }
      return { ...state, cart: newCart };
    }
    case "DEL_SHOE": {
      console.log("xoa", action.payload);
      let newCart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
      return { ...state, cart: newCart };
    }
    case "ADJ_QUANTITY": {
      console.log("adj", action.payload);
      const { shoeId, quantity } = action.payload;
      const newCart = [...state.cart];
      const index = newCart.findIndex((item) => item.id === shoeId);
      if (index !== -1) {
        newCart[index].cartQuantity =
          newCart[index].cartQuantity + quantity || 1;
      }
      return { ...state, cart: newCart };
    }
    default:
      return state;
  }
};
