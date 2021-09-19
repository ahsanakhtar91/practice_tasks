import * as actionTypes from "../actions/types";

interface StoreState {
  footballGamesContent: any;
  filterApplied: string | null;
}

const initialState: StoreState = {
  footballGamesContent: null,
  filterApplied: null,
};

const reducer = (state: StoreState = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.FETCH_FOOTBALL_GAMES:
      return {
        ...state,
        footballGamesContent: {
          ...action.payload,
        },
      };
    case actionTypes.APPLY_FILTER:
      return {
        ...state,
        filterApplied:
          state.filterApplied === action.payload ? null : action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
