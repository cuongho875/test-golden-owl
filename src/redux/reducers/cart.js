import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_CART,
} from "../const";
const initialState = {
  items: [],
  total:0
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Xử lý action thêm sản phẩm vào giỏ hàng
      return {
        items: [...state.items, action.payload],
        total: state.total + (action.payload.product.price * action.payload.quantity),
      };
    case REMOVE_CART:
      // Xử lý action xóa sản phẩm khỏi giỏ hàng
      const filteredItems = state.items.filter((item) => item.product.id !== action.payload);
      const filteredTotal = filteredItems.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0);
      return {
        items: filteredItems,
        total: filteredTotal
      };
    case INCREASE_QUANTITY:
      // Xử lý action tăng số lượng sản phẩm
      const increasedItems = state.items.map((item) => {
        if (item.product.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      });
      const increasedTotal = increasedItems.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0);
      return {
        items: increasedItems,
        total: increasedTotal
      };
    case DECREASE_QUANTITY:
      // Xử lý action giảm số lượng sản phẩm
      const decreasedItems = state.items.map((item) => {
        if (item.product.id === action.payload && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        } else {
          return item;
        }
      });
      const decreasedTotal = decreasedItems.reduce((acc, item) => {
        return acc + item.product.price * item.quantity;
      }, 0);
      return {
        items: decreasedItems,
        total:decreasedTotal
      };
    default:
      return state;
  }
};
export default cartReducer;