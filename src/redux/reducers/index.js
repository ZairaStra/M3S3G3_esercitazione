const initialState = {
  favorites: {
    content: [],
  },
  selectFavorite: {
    content: null,
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: [...state.favorites.content, action.payload],
        },
      };
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: {
          ...state.favorites,
          content: state.favorites.content.filter((_, name)),
        },
      };

    case "SELECT_FAVORITE":
      return {
        ...state,
        selectFavorite: {
          ...state.selectFavorite,
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
