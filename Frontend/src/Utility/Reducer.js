import { Type } from "./action.type";

export const initialState = {
  basket: [], // እዚህ ጋር 'basket' ብለን አስተካክለነዋል
};

export const reducer = (state, action) => {
  switch (action.type) {
    // 1. ምርት ወደ ካርት ለመጨመር (ADD_TO_BASKET)
    case Type.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    // 2. ምርት ከካርት ለመቀነስ (ኮሜንት ያደረግከውን ለማንቃት)
    case "REMOVE_FROM_CART":
      // ለመቀነስ መጀመሪያ ያንን ምርት በ ID ፈልገን የመጀመሪያውን እናገኘዋለን
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id,
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1); // ያገኘነውን 1 ምርት ብቻ ያስወግዳል
      } else {
        console.warn(`ምርቱን ማስወገድ አይቻልም (id: ${action.id}) ከባስኬት ውስጥ የለም!`);
      }

      return {
        ...state,
        basket: newBasket,
      };

    // 3. ሙሉ ካርቱን ባዶ ለማድረግ (RESET)
    case "RESET_CART":
      return {
        ...state,
        basket: [], // አሬዩን ሙሉ በሙሉ ባዶ ያደርገዋል
      };

    default:
      return state;
  }
};
